/**
 * This module was automatically generated from the OpenAPI specification
 * of the AroFlo Extended API located here: https://api.aroflo.com/openapi
 */
const __LINEITEMS = require('./lineItems');
const __NOTES = require('./notes');
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
		
		return AroFlo.httpRequest.get(`/accounting/creditnotes?` + urlSearchParams.toString(), {});
	},
	
	lineItems: __LINEITEMS(AroFlo),
	
	notes: __NOTES(AroFlo),
	
	allocations: __ALLOCATIONS(AroFlo),
	
	payments: __PAYMENTS(AroFlo)
});