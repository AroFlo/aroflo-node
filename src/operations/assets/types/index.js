/**
 * This module was automatically generated from the OpenAPI specification
 * of the AroFlo Extended API located here: https://api.aroflo.com/openapi
 */


module.exports = (AroFlo) => ({
	/**
	 * Mutate Asset Type.
	 * 
	 * Mutates the specified Asset Type.
	 * @param {object} payload Object to be posted as the body payload.
	 */
	mutate: async (assetType, payload = {}) => {
		// validate path parameters
		if (assetType === undefined || assetType == null) {
			throw new Error("`assetType` is a required argument and must be provided a non-null value.");
		}
		
		if (typeof payload != "object") {
			throw new Error("`payload` argument is not of type Object.");
		}
		
		return AroFlo.httpRequest.patch(`/assets/types/${assetType}`, {}, payload);
	},
	
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
	 */
	list: async (query = {}) => {
		// parse the query string components
		const urlSearchParams = [];
		if (typeof query != "undefined" && query != null) {
			if (typeof query != "object") {
				throw new Error("`query` argument is not of type Object.");
			}
		
			const flatQuery = AroFlo.utils.flattenObjectIntoDotNotation(query);
			Object.keys(flatQuery)
					.filter(_key => flatQuery.hasOwnProperty(_key))
					.forEach(_key => {
						let _value = flatQuery[_key];
						_value = Array.isArray(_value) ? _value.join(",") : _value;
						_value = _value.toString();
						_value = _value.replace(/\%/g, "%25");
						_value = _value.replace(/\&/g, "%26");
						_value = _value.replace(/\#/g, "%23");
						urlSearchParams.push(_key + "=" + _value);
					});
			urlSearchParams.sort()
		}
		
		return AroFlo.httpRequest.get(`/assets/types?` + urlSearchParams.join("&"), {});
	}
});