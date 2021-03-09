/**
 * This module was automatically generated from the OpenAPI specification
 * of the AroFlo Extended API located here: https://api.aroflo.com/openapi
 */


module.exports = (AroFlo) => ({
	/**
	 * Retrieve TransactionTerms.
	 * 
	 * Retrieves the specified TransactionTerms.
	 */
	get: async (transactionterms) => {
		// validate path parameters
		if (transactionterms === undefined || transactionterms == null) {
			throw new Error("`transactionterms` is a required argument and must be provided a non-null value.");
		}
		
		return AroFlo.httpRequest.get(`/transactionterms/${transactionterms}`, {});
	}
});