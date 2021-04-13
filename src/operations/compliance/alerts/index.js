/**
 * This module was automatically generated from the OpenAPI specification
 * of the AroFlo Extended API located here: https://api.aroflo.com/openapi
 */


module.exports = (AroFlo) => ({
	/**
	 * Describe Compliance Alert.
	 * 
	 * Retrieves the specified Compliance Alert.
	 */
	get: async (complianceAlert) => {
		// validate path parameters
		if (complianceAlert === undefined || complianceAlert == null) {
			throw new Error("`complianceAlert` is a required argument and must be provided a non-null value.");
		}
		
		return AroFlo.httpRequest.get(`/compliance/alerts/{alert}`, {});
	},
	
	/**
	 * List Compliance Alerts.
	 * 
	 * Retrieves a paginated collection Compliance Alerts.
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
		
		return AroFlo.httpRequest.get(`/compliance/alerts?` + urlSearchParams.toString(), {});
	}
});