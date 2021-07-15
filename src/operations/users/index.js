/**
 * This module was automatically generated from the OpenAPI specification
 * of the AroFlo Extended API located here: https://api.aroflo.com/openapi
 */
const __USERNAMES = require('./usernames');
const __POSITIONS = require('./positions');
const __HOURSOFWORKWEEK = require('./hoursOfWorkWeek');

module.exports = (AroFlo) => ({
	/**
	 * User Info.
	 * 
	 * Obtains details about the current authenticated user.
	 */
	current: async () => {
		return AroFlo.httpRequest.get(`/userinfo`, {});
	},
	
	usernames: __USERNAMES(AroFlo),
	
	positions: __POSITIONS(AroFlo),
	
	hoursOfWorkWeek: __HOURSOFWORKWEEK(AroFlo)
});