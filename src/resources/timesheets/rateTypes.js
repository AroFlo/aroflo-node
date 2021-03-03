'use strict';

const Utils =  require('../../utils');

function RateTypes(AroFlo) {
	/**
     * API call to retrieve a single rate type.
     */
    this.get = async (id) => AroFlo.httpRequest.get("/timesheets/ratetypes/" + id);

	/**
	 * API call to retrieve a list of rate typesd.
	 */
	this.list = async () => {
		const queryString = [];
		return AroFlo.httpRequest.get("/timesheets/ratetypes?" + queryString.join("&"));
	}
}

module.exports = RateTypes;
module.exports.RateTypes = RateTypes;
