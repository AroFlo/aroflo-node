if (typeof fetch === 'undefined') {
	global.fetch = require('node-fetch');
}
if (typeof Headers === 'undefined') {
	global.Headers = fetch.Headers;
}

const CryptoJS = require('crypto-js');

const PACKAGE_NAME = require('../package.json').name;
const PACKAGE_VERSION = require('../package.json').version;
const PACKAGE_HOMEPAGE = require('../package.json').homepage;


module.exports = (AroFlo) => {
	/**
	 *  handle the actual sending of the request.
	 */
	const executeRequest = async (method, url, headers, body) => fetch(url, {
			method: method
			, credentials: AroFlo.getApiField("withCredentials") ? "include" : "omit"
			, headers: headers
			, body: body
		})
		.then(resp => {
			// check for any warnings in the response headers
			if (resp.headers.has("Warning")) {
				console.warn(resp.headers.get("Warning"));
			}

			switch(resp.status) {
				case 400: throw new AroFlo.errors.AroFloInvalidRequestError(); break;
				case 401: throw new AroFlo.errors.AroFloAuthenticationError(); break;
				case 403: throw new AroFlo.errors.AroFloPermissionError(); break;
				case 422: throw new AroFlo.errors.AroFloUnprocessableRequestError(); break;
				case 429: throw new AroFlo.errors.AroFloRateLimitError(); break;
				case 503: throw new AroFlo.errors.AroFloConnectionError(); break;

				case 200: return resp.json(); break;
				case 204: return {}; break;
				default:
					if (resp.status < 300) {
						return resp.json();
					}

					throw new AroFlo.errors.AroFloAPIError();
					break;
			}
		});

	/**
	 * Return the current timestamp in ISO8601 formet without milliseconds.
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

		return CryptoJS.MD5(content).toString();
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
		, contentTypeHeader
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
			payload.push(contentTypeHeader.toLowerCase());
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
		const requestHeaders = new Headers();
		if (typeof headers !== 'undefined') {
			for (var key in headers) {
				if (headers.hasOwnProperty(key)) {
					requestHeaders.append(key, headers[key]);
				}
			}
		}

		// custom UserAgent
		requestHeaders.set("User-Agent", PACKAGE_NAME + "/" + PACKAGE_VERSION + " (" + PACKAGE_HOMEPAGE + ")");

		// set request timestamp
		const requestTimestamp = getISO8601Timestamp();
		requestHeaders.set("Date", requestTimestamp.toUTCString());

		// override specific headers
		requestHeaders.set("Content-Type", "application/json");
		requestHeaders.set("Accept", "application/json");

		// add authentication headers - HMAC
		const publicPersonalToken = AroFlo.getApiField("publicPersonalToken");
		const secretSigningKey = AroFlo.getApiField("secretSigningKey");
		if (publicPersonalToken != null && secretSigningKey != null) {
			const bodyMD5 = generateMD5Hash(body);

			const hmacSignature = generateHMACSignature(
				publicPersonalToken
				, secretSigningKey
				, method
				, requestURL.pathname + requestURL.search
				, requestTimestamp
				, requestHeaders.get("Accept")
				, bodyMD5 == null ? null : requestHeaders.get("Content-Type")
				, bodyMD5
			);

			requestHeaders.set("Authorization", "HMAC " + publicPersonalToken + ":" + hmacSignature);
		}

		return executeRequest(method, requestURL.toString(), requestHeaders, JSON.stringify(body));
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
