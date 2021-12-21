/**
 * This module was automatically generated from the OpenAPI specification
 * of the AroFlo Extended API located here: https://api.aroflo.com/openapi
 */
const __TYPES = require('./types');

module.exports = (AroFlo) => ({
	/**
	 * Describe Project Stage.
	 * 
	 * Retrieves the specified Project Stage.
	 */
	get: async (project, stage) => {
		// validate path parameters
		if (project === undefined || project == null) {
			throw new Error("`project` is a required argument and must be provided a non-null value.");
		}
		if (stage === undefined || stage == null) {
			throw new Error("`stage` is a required argument and must be provided a non-null value.");
		}
		
		return AroFlo.httpRequest.get(`/projects/${project}/stages/${stage}`, {});
	},
	
	/**
	 * List Project Stages.
	 * 
	 * Retrieves a list of Project Stages.
	 */
	list: async (project, query = {}) => {
		// validate path parameters
		if (project === undefined || project == null) {
			throw new Error("`project` is a required argument and must be provided a non-null value.");
		}
		
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
		
		return AroFlo.httpRequest.get(`/projects/${project}/stages?` + urlSearchParams.join("&"), {});
	},
	
	types: __TYPES(AroFlo)
});