/**
 * This module was automatically generated from the OpenAPI specification
 * of the AroFlo Extended API located here: https://api.aroflo.com/openapi
 */


module.exports = (AroFlo) => ({
	/**
	 * Retrieve Location.
	 * 
	 * Retrieves the specified Location.
	 */
	get: async (location) => {
		// validate path parameters
		if (location === undefined || location == null) {
			throw new Error("`location` is a required argument and must be provided a non-null value.");
		}
		
		return AroFlo.httpRequest.get(`/locations/${location}`, {});
	},
	
	/**
	 * List Locations.
	 * 
	 * Retrieves a paginated collection Locations.
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
		
		return AroFlo.httpRequest.get(`/locations?` + urlSearchParams.toString(), {});
	}
});