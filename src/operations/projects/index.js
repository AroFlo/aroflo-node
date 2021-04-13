/**
 * This module was automatically generated from the OpenAPI specification
 * of the AroFlo Extended API located here: https://api.aroflo.com/openapi
 */
const __TYPES = require('./types');
const __STAGES = require('./stages');

module.exports = (AroFlo) => ({
	/**
	 * Describe Project.
	 * 
	 * Retrieves the specified Project.
	 */
	get: async (project) => {
		// validate path parameters
		if (project === undefined || project == null) {
			throw new Error("`project` is a required argument and must be provided a non-null value.");
		}
		
		return AroFlo.httpRequest.get(`/projects/${project}`, {});
	},
	
	/**
	 * List Projects.
	 * 
	 * Retrieves a paginated collection Projects.
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
		
		return AroFlo.httpRequest.get(`/projects?` + urlSearchParams.toString(), {});
	},
	
	types: __TYPES(AroFlo),
	
	stages: __STAGES(AroFlo)
});