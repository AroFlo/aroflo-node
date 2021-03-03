'use strict';

const Utils =  require('../../utils');

function WorkTypes(AroFlo) {
	/**
     * API call to retrieve a single work type.
     */
    this.get = async (id) => AroFlo.httpRequest.get("/timesheets/worktypes/" + id);

	/**
	 * API call to retrieve a list of work types.
	 */
	this.list = async () => {
		const queryString = [];
		return AroFlo.httpRequest.get("/timesheets/worktypes?" + queryString.join("&"));
	}
}

module.exports = WorkTypes;
module.exports.WorkTypes = WorkTypes;
