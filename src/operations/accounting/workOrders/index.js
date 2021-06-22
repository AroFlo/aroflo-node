/**
 * This module was automatically generated from the OpenAPI specification
 * of the AroFlo Extended API located here: https://api.aroflo.com/openapi
 */


module.exports = (AroFlo) => ({
	/**
	 * Retrieves a single Work Order.
	 * 
	 * Work Order Details.
	 */
	get: async (workorder) => {
		// validate path parameters
		if (workorder === undefined || workorder == null) {
			throw new Error("`workorder` is a required argument and must be provided a non-null value.");
		}
		
		return AroFlo.httpRequest.get(`/accounting/workorders/${workorder}`, {});
	}
});