/**
 * This module was automatically generated from the OpenAPI specification
 * of the AroFlo Extended API located here: https://api.aroflo.com/openapi
 */


module.exports = (AroFlo) => ({
	/**
	 * Describe Project Stage Type.
	 * 
	 * Returns details about a specific Project Stage Type.
	 */
	get: async (projectstagetype) => {
		// validate path parameters
		if (projectstagetype === undefined || projectstagetype == null) {
			throw new Error("`projectstagetype` is a required argument and must be provided a non-null value.");
		}
		
		return AroFlo.httpRequest.get(`/projects/stages/types/${projectstagetype}`, {});
	},
	
	/**
	 * List Project Stage Types.
	 * 
	 * Returns details about a collection of Project Stage Types.
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
					.forEach(_key => urlSearchParams.push(_key + "=" + (Array.isArray(flatQuery[_key])
							? flatQuery[_key].join(",")
							: flatQuery[_key])
									.replace(/\%/g, "%25")
									.replace(/\&/g, "%26")
									.replace(/\#/g, "%23")
									));
			urlSearchParams.sort()
		}
		
		return AroFlo.httpRequest.get(`/projects/stages/types?` + urlSearchParams.toString(), {});
	}
});