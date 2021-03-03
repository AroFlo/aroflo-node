'use strict';

const Utils =  require('../../utils');

function Locations(AroFlo) {
	/**
     * API call to retrieve a single location.
     */
    this.get = async (id) => AroFlo.httpRequest.get("/locations/" + id);

	/**
	 * API call to retrieve a list of locations.
	 */
	this.list = async (opts) => {
		const queryString = [];
		if (opts) {
			opts.applied_organisation_name && queryString.push("applied_organisation_name=" + encodeURIComponent(opts.applied_organisation_name));
			opts.applied_to && queryString.push("applied_to=" + encodeURIComponent(opts.applied_to));
			Utils.appendBooleanToQueryStringList(queryString, "archived", opts.archived);
			opts.belongs_to && queryString.push("belongs_to=" + encodeURIComponent(opts.belongs_to));
			opts.limit && queryString.push("limit=" + encodeURIComponent(opts.limit));
			opts.order && queryString.push("order=" + encodeURIComponent(opts.order));
			opts.page && queryString.push("page=" + encodeURIComponent(opts.page));
			Utils.appendStringSearchToQueryStringList(queryString, "site_contact", opts.site_contact);
			Utils.appendStringSearchToQueryStringList(queryString, "site_email", opts.site_email);
			Utils.appendStringSearchToQueryStringList(queryString, "site_phone", opts.site_phone);
			opts.sort && queryString.push("sort=" + encodeURIComponent(opts.sort));
		}
		return AroFlo.httpRequest.get("/locations?" + queryString.join("&"));
	}

}

module.exports = Locations;
module.exports.Locations = Locations;
