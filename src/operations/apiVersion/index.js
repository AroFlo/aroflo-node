/**
 * This module was automatically generated from the OpenAPI specification
 * of the AroFlo Extended API located here: https://api.aroflo.com/openapi
 */


module.exports = (AroFlo) => ({
	/**
	 * API Version.
	 * 
	 * Obtains the current version details of the API.
	 */
	get: async () => {
		return AroFlo.httpRequest.get(`/version`, {});
	}
});