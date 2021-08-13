/**
 * This module was automatically generated from the OpenAPI specification
 * of the AroFlo Extended API located here: https://api.aroflo.com/openapi
 */


module.exports = (AroFlo) => ({
	/**
	 * Retrieve Location Note.
	 * 
	 * Retrieves the specified Location Note.
	 */
	get: async (location, note) => {
		// validate path parameters
		if (location === undefined || location == null) {
			throw new Error("`location` is a required argument and must be provided a non-null value.");
		}
		if (note === undefined || note == null) {
			throw new Error("`note` is a required argument and must be provided a non-null value.");
		}
		
		return AroFlo.httpRequest.get(`/locations/${location}/notes/${note}`, {});
	},
	
	/**
	 * Create Location Note.
	 * 
	 * Creates the specified Asset Category.
	 * @param {object} payload Object to be posted as the body payload.
	 */
	create: async (payload = {}) => {
		if (typeof payload != "object") {
			throw new Error("`payload` argument is not of type Object.");
		}
		
		return AroFlo.httpRequest.post(`/locations/{location}/notes`, {}, payload);
	}
});