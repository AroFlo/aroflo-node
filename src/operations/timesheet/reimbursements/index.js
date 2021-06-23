/**
 * This module was automatically generated from the OpenAPI specification
 * of the AroFlo Extended API located here: https://api.aroflo.com/openapi
 */


module.exports = (AroFlo) => ({
	/**
	 * Retrieve Timesheet Reimbursement.
	 * 
	 * Retrieves the specified Timesheet Reimbursement.In order to get a reimbursement that belongs to another user, you must have the permission timesheets:fields:users:view enabled.If you are using legacy permissions you must have greater permissions than legacy-access-type:base to view another users reimbursement.
	 */
	get: async (reimbursement) => {
		// validate path parameters
		if (reimbursement === undefined || reimbursement == null) {
			throw new Error("`reimbursement` is a required argument and must be provided a non-null value.");
		}
		
		return AroFlo.httpRequest.get(`/timesheets/reimbursements/${reimbursement}`, {});
	},
	
	/**
	 * List Timesheet Reimbursements.
	 * 
	 * Returns details about a collection of Timesheet Reimbursements.
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
		
		return AroFlo.httpRequest.get(`/timesheets/reimbursements?` + urlSearchParams.join("&"), {});
	}
});