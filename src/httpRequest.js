const http = require('http');
const https = require('https');
const CryptoJS = require('crypto-js');
const Package = require('../package.json');


module.exports = (AroFlo) => {
	/**
	 *  handle the actual sending of the request.
	 */
	const executeRequest = async (method, url, headers, body) => {
        return new Promise((resolve, reject) => {
            const transport = AroFlo.getApiField("protocol") == "http" ? http : https;

            const requestParams = {
				host: url.hostname
				, port: url.port
				, path: url.pathname + (url.search ? `?${url.search}` : "")
				, method: method
				, headers: headers
				, credentials: AroFlo.getApiField("withCredentials") ? "include" : "omit"
			};

            const req = transport.request(requestParams, (res) => {
                // check for a warning header
                if (res.headers.hasOwnProperty("Warning")) {
                    console.warn(res.headers["Warning"]);
                }
                var bodyData = "";
                res.setEncoding('utf8');
                res.on('data', (chunk) => bodyData += chunk);
                res.on('end', () => {
                    switch(res.statusCode) {
                        case 400: reject(new AroFlo.errors.AroFloInvalidRequestError()); break;
                        case 401: reject(new AroFlo.errors.AroFloAuthenticationError()); break;
                        case 403: reject(new AroFlo.errors.AroFloPermissionError()); break;
                        case 422: reject(new AroFlo.errors.AroFloUnprocessableRequestError()); break;
                        case 429: reject(new AroFlo.errors.AroFloRateLimitError()); break;
                        case 503: reject(new AroFlo.errors.AroFloConnectionError()); break;

                        case 204: return resolve({}); break;
                        default:
                            if (res.statusCode < 300) {
                                return resolve(JSON.parse(bodyData));
                            }

                            reject(new AroFlo.errors.AroFloAPIError());
                            break;
                    }
                });
            });

            req.on('error', (e) => reject(new AroFlo.errors.AroFloAPIError(e)));
            body && req.write(JSON.stringify(body));
            req.end();

        });

	};

	/**
	 * Return the current timestamp in ISO8601 format without milliseconds.
	 */
	const getISO8601Timestamp = () => {
		const d = new Date();
		d.setMilliseconds(0);
		return d;
	}

	/*
	 * Generate an MD5 hash of the given value.
	 */
	const generateMD5Hash = (content) => {
		if (typeof content == 'undefined' || content == null) {
			return null;
		}

		return CryptoJS.MD5(JSON.stringify(content)).toString();
	};

	/*
	 * Generates and returns the HMAC signature composed of the provided information.
	 */
	const generateHMACSignature = (
		publicPersonalToken
		, secretSigningKey
		, httpMethod
		, requestURI
		, requestTimestamp
		, acceptHeader
		, content
	) => {
		const payload = [];

		// add the HTTP METHOD
		payload.push(httpMethod.toUpperCase());

		// add the URL path + query string
		payload.push(requestURI);

		// add the accept header
		payload.push(acceptHeader.toLowerCase());

		// add the public personal token
		payload.push(publicPersonalToken);

		// add the timestamp
		payload.push(requestTimestamp.toISOString());

		// body content
		if (typeof content != undefined && content) {
			payload.push(content.toUpperCase());
		}

		const hmacSignature = CryptoJS.HmacSHA512(payload.join('+'), secretSigningKey);
		const base64HmacSignature = CryptoJS.enc.Base64.stringify(hmacSignature);
		return base64HmacSignature;
	}

	/*
	 * Converts the URIParth into a full URL.
	 */
	const resolveRequestURL = (url) => {
		let _tempUrl = "";
		if (AroFlo.getApiField("host") != null) {
			if (AroFlo.getApiField("protocol") != null) {
				_tempUrl += AroFlo.getApiField("protocol") + ":";
			}

			_tempUrl += "//" + AroFlo.getApiField("host");

			if (AroFlo.getApiField("port") != null) {
				_tempUrl += ":" + AroFlo.getApiField("port");
			}
		}
		if (AroFlo.getApiField("basePath") != null) {
			_tempUrl += AroFlo.getApiField("basePath");
		}
		return new URL(_tempUrl + url);
	}

	/**
	 * Parse and send the given request.
	 */
	const parseRequest = async (method, url, headers, body) => {

		// parse the URL
		const requestURL = resolveRequestURL( url);

		// parse headers
		const requestHeaders = {};
		if (typeof headers !== 'undefined') {
			for (var key in headers) {
				if (headers.hasOwnProperty(key)) {
					requestHeaders[key] = headers[key];
				}
			}
		}

		// custom UserAgent
		requestHeaders["User-Agent"] = Package.name + "/" + Package.version + " (" + Package.homepage + ")";

		// set request timestamp
		const requestTimestamp = getISO8601Timestamp();
		requestHeaders["Date"] = requestTimestamp.toUTCString();

		// override specific headers
		requestHeaders["Accept"] = "application/json";

		// add authentication headers - HMAC
        const bodyMD5 = generateMD5Hash(body);
		const publicPersonalToken = AroFlo.getApiField("publicPersonalToken");
		const secretSigningKey = AroFlo.getApiField("secretSigningKey");
		if (publicPersonalToken != null && secretSigningKey != null) {
			const hmacSignature = generateHMACSignature(
				publicPersonalToken
				, secretSigningKey
				, method
				, requestURL.pathname + requestURL.search
				, requestTimestamp
				, requestHeaders["Accept"]
				, bodyMD5
			);

			requestHeaders["Authorization"] = "HMAC " + publicPersonalToken + ":" + hmacSignature;
		}

		if (bodyMD5 != null) {
		    requestHeaders["Content-Type"] = "application/json; charset=UTF-8";
		    requestHeaders['Content-Length'] = JSON.stringify(body).length;
		}

		return executeRequest(method, requestURL, requestHeaders, body);
	};

	// expose our methods
    return {
        post: async (url, headers, body) => parseRequest("POST", url, headers, body)
        , put: async (url, headers, body) =>  parseRequest("PUT", url, headers, body)
        , patch: async (url, headers, body) => parseRequest("PATCH", url, headers, body)
        , delete: async (url, headers) => parseRequest("DELETE", url, headers, undefined)
        , get: async (url, headers) => parseRequest("GET", url, headers, undefined)
        , head: async (url, headers) => parseRequest("HEAD", url, headers, undefined)
    }
};
