/**
 * This module was automatically generated from the OpenAPI specification
 * of the AroFlo Extended API located here: https://api.aroflo.com/openapi
 */


module.exports = (AroFlo) => ({
	/**
	 * Retrieve Priority.
	 * 
	 * Retrieves the specified Priority.
	 */
	get: async (priority) => {
		// validate path parameters
		if (priority === undefined || priority == null) {
			throw new Error("`priority` is a required argument and must be provided a non-null value.");
		}
		
		return AroFlo.httpRequest.get(`/priorities/${priority}`, {});
	},
	
	/**
	 * List Priorities.
	 * 
	 * Returns details about a collection of Priorities.
	 * @param {object} payload Object to be posted as the body payload.
	 */
	list: async (query = {}, payload = {}) => {
		// parse the query string components
		const urlSearchParams = new URLSearchParams();
		if (typeof query != "undefined" && query != null) {
			if (typeof query != "object") {
				throw new Error("`query` argument is not of type Object.");
			}
		
			const flatQuery = AroFlo.utils.flattenObjectIntoDotNotation(query);
			Object.keys(flatQuery)
					.filter(_key => flatQuery.hasOwnProperty(_key))
					.forEach(_key => urlSearchParams.append(_key, Array.isArray(flatQuery[_key])
							? flatQuery[_key].join(",")
							: flatQuery[_key]));
			urlSearchParams.sort()
		}
		
		if (typeof payload != "object") {
			throw new Error("`payload` argument is not of type Object.");
		}
		
		return AroFlo.httpRequest.get(`/priorities?` + urlSearchParams.toString(), {}, payload);
	}
});