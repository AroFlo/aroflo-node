'use strict';

const Utils =  require('../../utils');

function ComplianceAlerts(AroFlo) {
	/**
     * API call to retrieve a single compliance alert.
     */
    this.get = async (id) => AroFlo.httpRequest.get("/compliance/alerts/" + id);

	/**
	 * API call to retrieve a list of compliance alerts.
	 */
	this.list = async (opts) => {
		const queryString = [];
		if (opts) {
			opts.belongs_to && queryString.push("belongs_to=" + encodeURIComponent(opts.belongs_to));
			Utils.appendDateRangeToQueryStringList(queryString, "created", opts.created);
			Utils.appendDateRangeToQueryStringList(queryString, "expired", opts.expired);
			opts.limit && queryString.push("limit=" + encodeURIComponent(opts.limit));
            Utils.appendStringSearchToQueryStringList(queryString, "name", opts.name);
			opts.page && queryString.push("page=" + encodeURIComponent(opts.page));
			opts.order && queryString.push("order=" + encodeURIComponent(opts.order));
            Utils.appendStringSearchToQueryStringList(queryString, "reference_number", opts.reference_number);
			opts.sort && queryString.push("sort=" + encodeURIComponent(opts.sort));
			Utils.appendCSVToQueryStringList(queryString, "status", opts.status);
		}
		return AroFlo.httpRequest.get("/compliance/alerts?" + queryString.join("&"));
	}
}

module.exports = ComplianceAlerts;
module.exports.ComplianceAlerts = ComplianceAlerts;
