/**
 * This module was automatically generated from the OpenAPI specification
 * of the AroFlo Extended API located here: https://api.aroflo.com/openapi
 */


module.exports = (AroFlo) => ({
	/**
	 * List Allocations.
	 * 
	 * Provides a summarized list of allocations for a specified credit note.
	 */
	list: async (creditnote) => {
		// validate path parameters
		if (creditnote === undefined || creditnote == null) {
			throw new Error("`creditnote` is a required argument and must be provided a non-null value.");
		}
		
		return AroFlo.httpRequest.get(`/accounting/creditnotes/${creditnote}/allocations`, {});
	}
});