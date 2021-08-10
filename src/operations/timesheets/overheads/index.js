/**
 * This module was automatically generated from the OpenAPI specification
 * of the AroFlo Extended API located here: https://api.aroflo.com/openapi
 */


module.exports = (AroFlo) => ({
	/**
	 * Retrieve Overhead.
	 * 
	 * Retrieves the specified Overhead.
	 */
	get: async (overhead) => {
		// validate path parameters
		if (overhead === undefined || overhead == null) {
			throw new Error("`overhead` is a required argument and must be provided a non-null value.");
		}
		
		return AroFlo.httpRequest.get(`/timesheets/overheads/${overhead}`, {});
	}
});