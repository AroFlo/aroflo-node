'use strict';

/**
 * AroFloError is the base error from which all other more specific AroFlo errors derive.
 * Specifically for errors returned from AroFlo's REST API.
 */
class AroFloError extends Error {

	constructor(raw = {}) {
		super(raw.message);
		this.raw = raw;
		this.type = this.constructor.name;

		this.rawType = raw.type;
		this.code = raw.code;
		this.param = raw.param;
		this.detail = raw.detail;
		this.headers = raw.headers;
		this.requestId = raw.requestId;
		this.statusCode = raw.statusCode;
		this.message = raw.message;
		this.source = raw.source;
	  }

}


/**
 * InvalidRequestError is raised when a request is initiated with invalid
 * parameters.
 */
class AroFloInvalidRequestError extends AroFloError {}

/**
 * APIError is a generic error that may be raised in cases where none of the
 * other named errors cover the problem. It could also be raised in the case
 * that a new error has been introduced in the API, but this version of the
 * Node.JS SDK doesn't know how to handle it.
 */
class AroFloAPIError extends AroFloError {}

/**
 * AuthenticationError is raised when invalid credentials are used to connect
 * to AroFlo's servers.
 */
class AroFloAuthenticationError extends AroFloError {}

/**
 * PermissionError is raised in cases where access was attempted on a resource
 * that wasn't allowed.
 */
class AroFloPermissionError extends AroFloError {}

/**
 * RateLimitError is raised in cases where an account is putting too much load
 * on AroFlo's API servers (usually by performing too many requests). Please
 * back off on request rate.
 */
class AroFloRateLimitError extends AroFloError {}

/**
 * AroFloConnectionError is raised in the event that the SDK can't connect to
 * AroFlo's servers. That can be for a variety of different reasons from a
 * downed network to a bad TLS certificate.
 */
class AroFloConnectionError extends AroFloError {}

/**
 * AroFloUnprocessableRequestError is raised when the provided content cannot be
 * processed by the server, usually the given data has failed validation checks.
 */
class AroFloUnprocessableRequestError extends AroFloError {}


module.exports.AroFloError = AroFloError;
module.exports.AroFloInvalidRequestError = AroFloInvalidRequestError;
module.exports.AroFloAPIError = AroFloAPIError;
module.exports.AroFloAuthenticationError = AroFloAuthenticationError;
module.exports.AroFloPermissionError = AroFloPermissionError;
module.exports.AroFloRateLimitError = AroFloRateLimitError;
module.exports.AroFloConnectionError = AroFloConnectionError;
