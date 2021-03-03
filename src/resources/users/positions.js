'use strict';

const Utils =  require('../../utils');

function UserPositions(AroFlo) {
	/**
     * API call to retrieve a single user position.
     */
    this.get = async (id) => AroFlo.httpRequest.get("/positions/" + id);

	/**
	 * API call to retrieve a list of user positions.
	 */
	this.list = async (opts) => {
		const queryString = [];
		if (typeof opts == "object") {
			Utils.appendBooleanToQueryStringList(queryString, "archived", opts.archived);
            opts.belongs_to && queryString.push("belongs_to=" + encodeURIComponent(opts.belongs_to));
		}
		return AroFlo.httpRequest.get("/positions?" + queryString.join("&"));
	}
}

module.exports = UserPositions;
module.exports.UserPositions = UserPositions;
