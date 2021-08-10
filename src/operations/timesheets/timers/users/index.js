/**
 * This module was automatically generated from the OpenAPI specification
 * of the AroFlo Extended API located here: https://api.aroflo.com/openapi
 */


module.exports = (AroFlo) => ({
	/**
	 * Retrieve Timer User Resources.
	 * 
	 * Retrieves the specified Timer.
	 */
	list: async (timer) => {
		// validate path parameters
		if (timer === undefined || timer == null) {
			throw new Error("`timer` is a required argument and must be provided a non-null value.");
		}
		
		return AroFlo.httpRequest.get(`/timesheets/timers/${timer}/users`, {});
	}
});