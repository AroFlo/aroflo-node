/**
 * This module was automatically generated from the OpenAPI specification
 * of the AroFlo Extended API located here: https://api.aroflo.com/openapi
 */


module.exports = (AroFlo) => ({
	/**
	 * Retrieve Crew.
	 * 
	 * Retrieves the specified Crew.
	 */
	get: async (crew) => {
		// validate path parameters
		if (crew === undefined || crew == null) {
			throw new Error("`crew` is a required argument and must be provided a non-null value.");
		}
		
		return AroFlo.httpRequest.get(`/crews/${crew}`, {});
	}
});