/**
 * This module was automatically generated from the OpenAPI specification
 * of the AroFlo Extended API located here: https://api.aroflo.com/openapi
 */


module.exports = (AroFlo) => ({
	/**
	 * Retrieve User Hours of Work Week.
	 * 
	 * Retrieves the specified user's Hours of Work Week. If a day returns <code>null</code>, the day is set to <strong>inherit</strong>.<br>Please note that only employee users can have hours of work set up.
	 */
	get: async (user) => {
		// validate path parameters
		if (user === undefined || user == null) {
			throw new Error("`user` is a required argument and must be provided a non-null value.");
		}
		
		return AroFlo.httpRequest.get(`/users/${user}/hoursofwork`, {});
	}
});