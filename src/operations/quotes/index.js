/**
 * This module was automatically generated from the OpenAPI specification
 * of the AroFlo Extended API located here: https://api.aroflo.com/openapi
 */


module.exports = (AroFlo) => ({
	/**
	 * Retrieve Quote.
	 * 
	 * Retrieves the specified Quote.
	 */
	get: async (quote) => {
		// validate path parameters
		if (quote === undefined || quote == null) {
			throw new Error("`quote` is a required argument and must be provided a non-null value.");
		}
		
		return AroFlo.httpRequest.get(`/quotes/${quote}`, {});
	}
});