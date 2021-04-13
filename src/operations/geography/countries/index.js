/**
 * This module was automatically generated from the OpenAPI specification
 * of the AroFlo Extended API located here: https://api.aroflo.com/openapi
 */


module.exports = (AroFlo) => ({
	/**
	 * Retrieve Country.
	 * 
	 * Retrieves the specified Country.
	 */
	get: async (country) => {
		// validate path parameters
		if (country === undefined || country == null) {
			throw new Error("`country` is a required argument and must be provided a non-null value.");
		}
		
		return AroFlo.httpRequest.get(`/geography/countries/${country}`, {});
	},
	
	/**
	 * List Countries.
	 * 
	 * Returns details about a collection of Countries.
	 * @param {object} payload Object to be posted as the body payload.
	 */
	list: async (query = {}, payload = {}) => {
		// parse the query string components
		const urlSearchParams = [];
		if (typeof query != "undefined" && query != null) {
			if (typeof query != "object") {
				throw new Error("`query` argument is not of type Object.");
			}
		
			const flatQuery = AroFlo.utils.flattenObjectIntoDotNotation(query);
			Object.keys(flatQuery)
					.filter(_key => flatQuery.hasOwnProperty(_key))
					.forEach(_key => urlSearchParams.push(_key + "=" + (Array.isArray(flatQuery[_key])
							? flatQuery[_key].join(",")
							: flatQuery[_key])
									.replace(/\%/g, "%25")
									.replace(/\&/g, "%26")
									.replace(/\#/g, "%23")
									));
			urlSearchParams.sort()
		}
		
		if (typeof payload != "object") {
			throw new Error("`payload` argument is not of type Object.");
		}
		
		return AroFlo.httpRequest.get(`/geography/countries?` + urlSearchParams.toString(), {}, payload);
	}
});