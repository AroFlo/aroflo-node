/**
 * This module was automatically generated from the OpenAPI specification
 * of the AroFlo Extended API located here: https://api.aroflo.com/openapi
 */


module.exports = (AroFlo) => ({
	/**
	 * Retrieve Timesheet Entry.
	 * 
	 * Retrieves the specified Timesheet Entry.In order to get a timesheet that belongs to another user, you must have the permission timesheets:fields:users:view enabled.If you are using legacy permissions you must have greater permissions than legacy-access-type:base to view other users timesheets.
	 */
	get: async (timesheetEntry) => {
		// validate path parameters
		if (timesheetEntry === undefined || timesheetEntry == null) {
			throw new Error("`timesheetEntry` is a required argument and must be provided a non-null value.");
		}
		
		return AroFlo.httpRequest.get(`/timesheets/entries/${timesheetEntry}`, {});
	}
});