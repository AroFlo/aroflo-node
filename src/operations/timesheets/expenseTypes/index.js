/**
 * This module was automatically generated from the OpenAPI specification
 * of the AroFlo Extended API located here: https://api.aroflo.com/openapi
 */


module.exports = (AroFlo) => ({
	/**
	 * Retrieve an Expense Type.
	 * 
	 * Retrieves the specified Expense Type.
	 */
	get: async (expensetype) => {
		// validate path parameters
		if (expensetype === undefined || expensetype == null) {
			throw new Error("`expensetype` is a required argument and must be provided a non-null value.");
		}
		
		return AroFlo.httpRequest.get(`/timesheets/expensetypes/${expensetype}`, {});
	}
});