'use strict';

const Utils =  require('../../utils');

function TrackingCentres(AroFlo) {
	/**
     * API call to retrieve a single tracking centre.
     */
    this.get = async (id) => AroFlo.httpRequest.get("/reporting/trackingcentres/" + id);

	/**
	 * API call to retrieve a list of tracking centres.
	 */
	this.list = async (opts) => {
		const queryString = [];
		if (opts) {
			opts.limit && queryString.push("limit=" + encodeURIComponent(opts.limit));
			opts.page && queryString.push("page=" + encodeURIComponent(opts.page));
			if (typeof opts.usage == "object") {
				Utils.appendCSVToQueryStringList(queryString, "usage.all", opts.usage.all);
				Utils.appendCSVToQueryStringList(queryString, "usage.any", opts.usage.any);
				Utils.appendCSVToQueryStringList(queryString, "usage.none", opts.usage.none);
			}
		}
		return AroFlo.httpRequest.get("/reporting/trackingcentres?" + queryString.join("&"));
	}
}

module.exports = TrackingCentres;
module.exports.TrackingCentres = TrackingCentres;
