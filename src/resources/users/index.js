'use strict';

const UserPositions = require('./positions');

function Users(AroFlo) {
	/**
	 * Api call to retrieve the current user information and return a User object
	 */
	this.current = async () => AroFlo.httpRequest.get("/userinfo", undefined);

	this.positions = new UserPositions(AroFlo);
}

module.exports = Users;
module.exports.Users = Users;
