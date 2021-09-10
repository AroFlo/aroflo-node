/**
 * This module was automatically generated from the OpenAPI specification
 * of the AroFlo Extended API located here: https://api.aroflo.com/openapi
 */
const __USERS = require('./users');

module.exports = (AroFlo) => ({
	/**
	 * Retrieve Permission Group.
	 * 
	 * Retrieves the specified Permission Group.
	 */
	get: async (group_id) => {
		// validate path parameters
		if (group_id === undefined || group_id == null) {
			throw new Error("`group_id` is a required argument and must be provided a non-null value.");
		}
		
		return AroFlo.httpRequest.get(`/permissiongroups/${group_id}`, {});
	},
	
	/**
	 * Create Permission Group.
	 * 
	 * Creates a new permission group.
	 * @param {object} payload Object to be posted as the body payload.
	 */
	create: async (payload = {}) => {
		if (typeof payload != "object") {
			throw new Error("`payload` argument is not of type Object.");
		}
		
		return AroFlo.httpRequest.post(`/permissiongroups`, {}, payload);
	},
	
	users: __USERS(AroFlo)
});