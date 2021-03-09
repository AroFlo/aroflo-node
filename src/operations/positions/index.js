/**
 * This module was automatically generated from the OpenAPI specification
 * of the AroFlo Extended API located here: https://api.aroflo.com/openapi
 */


module.exports = (AroFlo) => ({
	/**
	 * Describe Position.
	 * 
	 * Retrieves the specified Position.
	 */
	get: async (position) => {
		// validate path parameters
		if (position === undefined || position == null) {
			throw new Error("`position` is a required argument and must be provided a non-null value.");
		}
		
		return AroFlo.httpRequest.get(`/positions/${position}`, {});
	}
});