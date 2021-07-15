/**
 * This module was automatically generated from the OpenAPI specification
 * of the AroFlo Extended API located here: https://api.aroflo.com/openapi
 */


module.exports = (AroFlo) => ({
	/**
	 * Describe Project Retention Scheme.
	 * 
	 * Retrieves the specified Project Retention Scheme.
	 */
	get: async (projectRetentionScheme) => {
		// validate path parameters
		if (projectRetentionScheme === undefined || projectRetentionScheme == null) {
			throw new Error("`projectRetentionScheme` is a required argument and must be provided a non-null value.");
		}
		
		return AroFlo.httpRequest.get(`/projects/retentions/schemes/${projectRetentionScheme}`, {});
	}
});