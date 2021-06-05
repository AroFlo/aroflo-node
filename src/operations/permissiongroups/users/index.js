/**
 * This module was automatically generated from the OpenAPI specification
 * of the AroFlo Extended API located here: https://api.aroflo.com/openapi
 */


module.exports = (AroFlo) => ({
	/**
	 * Add User to Permission Group.
	 * 
	 * Creates a link between a permission group and a user.
	 * @param {object} payload Object to be posted as the body payload.
	 */
	create: async (group_id, payload = {}) => {
		// validate path parameters
		if (group_id === undefined || group_id == null) {
			throw new Error("`group_id` is a required argument and must be provided a non-null value.");
		}
		
		if (typeof payload != "object") {
			throw new Error("`payload` argument is not of type Object.");
		}
		
		return AroFlo.httpRequest.post(`/permissiongroups/${group_id}/users`, {}, payload);
	}
});