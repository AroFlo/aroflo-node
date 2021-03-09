/**
 * This module was automatically generated from the OpenAPI specification
 * of the AroFlo Extended API located here: https://api.aroflo.com/openapi
 */
const __LINEITEMS = require('./lineItems');
const __NOTE = require('./note');
const __ALLOCATIONS = require('./allocations');
const __PAYMENTS = require('./payments');

module.exports = (AroFlo) => ({
	/**
	 * Describe Credit Note.
	 * 
	 * Credit Note Details.
	 */
	get: async (creditnote) => {
		// validate path parameters
		if (creditnote === undefined || creditnote == null) {
			throw new Error("`creditnote` is a required argument and must be provided a non-null value.");
		}
		
		return AroFlo.httpRequest.get(`/accounting/creditnotes/${creditnote}`, {});
	},
	
	/**
	 * List Credit Notes.
	 * 
	 * Collection of Credit Note Details.
	 */
	list: async (query = {}) => {
		// parse the query string components
		const urlSearchParams = new URLSearchParams();
		if (typeof query != "undefined" && query != null) {
			if (typeof query != "object") {
				throw new Error("`query` argument is not of type Object.");
			}
		
			const flatQuery = AroFlo.utils.flattenObjectIntoDotNotation(query);
			Object.keys(flatQuery)
					.filter(_key => flatQuery.hasOwnProperty(_key))
					.forEach(_key => urlSearchParams.append(_key, Array.isArray(flatQuery[_key])
							? flatQuery[_key].join(",")
							: flatQuery[_key]));
			urlSearchParams.sort()
		}
		
		return AroFlo.httpRequest.get(`/accounting/creditnotes?` + urlSearchParams.toString(), {});
	},
	
	lineItems: __LINEITEMS(AroFlo),
	
	note: __NOTE(AroFlo),
	
	allocations: __ALLOCATIONS(AroFlo),
	
	payments: __PAYMENTS(AroFlo)
});