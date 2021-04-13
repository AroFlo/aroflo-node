/**
 * This module was automatically generated from the OpenAPI specification
 * of the AroFlo Extended API located here: https://api.aroflo.com/openapi
 */


module.exports = (AroFlo) => ({
	/**
	 * Retrieve Asset Category.
	 * 
	 * Retrieves the specified AssetCategory.
	 */
	get: async (assetcategory) => {
		// validate path parameters
		if (assetcategory === undefined || assetcategory == null) {
			throw new Error("`assetcategory` is a required argument and must be provided a non-null value.");
		}
		
		return AroFlo.httpRequest.get(`/assets/categories/${assetcategory}`, {});
	},
	
	/**
	 * Create Asset Category.
	 * 
	 * Creates the specified Asset Category.
	 * @param {object} payload Object to be posted as the body payload.
	 */
	create: async (payload = {}) => {
		if (typeof payload != "object") {
			throw new Error("`payload` argument is not of type Object.");
		}
		
		return AroFlo.httpRequest.post(`/assets/categories`, {}, payload);
	},
	
	/**
	 * List Asset categories.
	 * 
	 * Returns details about a collection of Custom Holders.
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
						let value = flatQuery[_key];
						value = Array.isArray(value) ? value.join(",") : value;
						value = value.replace(/\%/g, "%25");
						value = value.replace(/\&/g, "%26");
						value = value.replace(/\#/g, "%23");
						urlSearchParams.push(_key + "=" + value);
					});
			urlSearchParams.sort()
		}
		
		return AroFlo.httpRequest.get(`/assets/categories?` + urlSearchParams.toString(), {});
	}
});