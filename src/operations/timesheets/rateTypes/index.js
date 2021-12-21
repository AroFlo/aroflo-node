/**
 * This module was automatically generated from the OpenAPI specification
 * of the AroFlo Extended API located here: https://api.aroflo.com/openapi
 */


module.exports = (AroFlo) => ({
	/**
	 * Retrieve Rate Type.
	 * 
	 * Retrieves the specified Rate Type.
	 */
	get: async (rateType) => {
		// validate path parameters
		if (rateType === undefined || rateType == null) {
			throw new Error("`rateType` is a required argument and must be provided a non-null value.");
		}
		
		return AroFlo.httpRequest.get(`/timesheets/ratetypes/${rateType}`, {});
	},
	
	/**
	 * List Rate Types.
	 * 
	 * Collection of Rate Type Details.
	 */
	list: async () => {
		return AroFlo.httpRequest.get(`/timesheets/ratetypes`, {});
	}
});