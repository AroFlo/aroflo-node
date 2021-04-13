/**
 * This module was automatically generated from the OpenAPI specification
 * of the AroFlo Extended API located here: https://api.aroflo.com/openapi
 */


module.exports = (AroFlo) => ({
	/**
	 * List Job Control.
	 * 
	 * Shows the breakdown of tasks as shown on the [AroFlo Home Screen](https://help.aroflo.com/display/office/Home).
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
		
		return AroFlo.httpRequest.get(`/jobcontrol?` + urlSearchParams.toString(), {});
	}
});