/**
 * This module was automatically generated from the OpenAPI specification
 * of the AroFlo Extended API located here: https://api.aroflo.com/openapi
 */
const __LINKEDORGS = require('./linkedOrgs');

module.exports = (AroFlo) => ({
	/**
	 * Retrieve Work Type.
	 * 
	 * Retrieves the specified Work Type.
	 */
	get: async (workType) => {
		// validate path parameters
		if (workType === undefined || workType == null) {
			throw new Error("`workType` is a required argument and must be provided a non-null value.");
		}
		
		return AroFlo.httpRequest.get(`/timesheets/worktypes/${workType}`, {});
	},
	
	/**
	 * List Work Types.
	 * 
	 * Collection of Work Type Details.
	 */
	list: async () => {
		return AroFlo.httpRequest.get(`/timesheets/worktypes`, {});
	},
	
	linkedOrgs: __LINKEDORGS(AroFlo)
});