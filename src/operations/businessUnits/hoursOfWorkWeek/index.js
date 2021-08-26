/**
 * This module was automatically generated from the OpenAPI specification
 * of the AroFlo Extended API located here: https://api.aroflo.com/openapi
 */


module.exports = (AroFlo) => ({
	/**
	 * Retrieve Business Unit Hours of Work Week.
	 * 
	 * Retrieves the specified Business Unit's Hours of Work Week. If a day returns <code>null</code>, the day is set to <strong>inherit</strong>.
	 */
	get: async (businessunit) => {
		// validate path parameters
		if (businessunit === undefined || businessunit == null) {
			throw new Error("`businessunit` is a required argument and must be provided a non-null value.");
		}
		
		return AroFlo.httpRequest.get(`/businessunits/${businessunit}/hoursofwork`, {});
	}
});