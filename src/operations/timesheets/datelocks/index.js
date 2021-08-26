/**
 * This module was automatically generated from the OpenAPI specification
 * of the AroFlo Extended API located here: https://api.aroflo.com/openapi
 */


module.exports = (AroFlo) => ({
	/**
	 * Retrieve Timesheet Date Lock.
	 * 
	 * Retrieves the specified Timesheet Date Lock filtered by a user and a date. This endpoint only allows users with Permission Group.
	 */
	get: async (userId, date) => {
		// validate path parameters
		if (userId === undefined || userId == null) {
			throw new Error("`userId` is a required argument and must be provided a non-null value.");
		}
		if (date === undefined || date == null) {
			throw new Error("`date` is a required argument and must be provided a non-null value.");
		}
		
		return AroFlo.httpRequest.get(`/timesheets/endofday/${userId}/${date}`, {});
	}
});