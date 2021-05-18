/**
 * This module was automatically generated from the OpenAPI specification
 * of the AroFlo Extended API located here: https://api.aroflo.com/openapi
 */


module.exports = (AroFlo) => ({
	/**
	 * Mutate Priority.
	 * 
	 * Mutates the specified Priority.
	 * @param {object} payload Object to be posted as the body payload.
	 */
	mutate: async (businessunit, priority, payload = {}) => {
		// validate path parameters
		if (businessunit === undefined || businessunit == null) {
			throw new Error("`businessunit` is a required argument and must be provided a non-null value.");
		}
		if (priority === undefined || priority == null) {
			throw new Error("`priority` is a required argument and must be provided a non-null value.");
		}
		
		if (typeof payload != "object") {
			throw new Error("`payload` argument is not of type Object.");
		}
		
		return AroFlo.httpRequest.patch(`/businessunits/${businessunit}/priorities/${priority}`, {}, payload);
	},
	
	/**
	 * Create Priority.
	 * 
	 * Creates the specified Priority.
	 * @param {object} payload Object to be posted as the body payload.
	 */
	create: async (businessunit, payload = {}) => {
		// validate path parameters
		if (businessunit === undefined || businessunit == null) {
			throw new Error("`businessunit` is a required argument and must be provided a non-null value.");
		}
		
		if (typeof payload != "object") {
			throw new Error("`payload` argument is not of type Object.");
		}
		
		return AroFlo.httpRequest.post(`/businessunits/${businessunit}/priorities`, {}, payload);
	}
});