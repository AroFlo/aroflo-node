/**
 * This module was automatically generated from the OpenAPI specification
 * of the AroFlo Extended API located here: https://api.aroflo.com/openapi
 */


module.exports = (AroFlo) => ({
	/**
	 * Retrieve Asset Type.
	 * 
	 * Retrieves the specified Asset Type.
	 */
	get: async (assetType) => {
		// validate path parameters
		if (assetType === undefined || assetType == null) {
			throw new Error("`assetType` is a required argument and must be provided a non-null value.");
		}
		
		return AroFlo.httpRequest.get(`/assets/types/${assetType}`, {});
	},
	
	/**
	 * Create Asset Type.
	 * 
	 * Creates the specified Asset Type.
	 * @param {object} payload Object to be posted as the body payload.
	 */
	create: async (payload = {}) => {
		if (typeof payload != "object") {
			throw new Error("`payload` argument is not of type Object.");
		}
		
		return AroFlo.httpRequest.post(`/assets/types`, {}, payload);
	},
	
	/**
	 * List Asset Types.
	 * 
	 * Returns details about a collection of Asset Types.
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
		
		return AroFlo.httpRequest.get(`/assets/types?` + urlSearchParams.toString(), {}, payload);
	}
});