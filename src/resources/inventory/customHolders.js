'use strict';

const Utils =  require('../../utils');

function InventoryCustomHolders(AroFlo) {
	/**
     * API call to retrieve a single custom holder.
     */
    this.get = async (id) => AroFlo.httpRequest.get("/inventory/customholders/" + id);

	/**
	 * API call to retrieve a list of custom holderd.
	 */
	this.list = async (opts) => {
		const queryString = [];
		if (opts) {
			Utils.appendBooleanToQueryStringList(queryString, "archived", opts.archived);
            Utils.appendStringSearchToQueryStringList(queryString, "name", opts.name);
			opts.limit && queryString.push("limit=" + encodeURIComponent(opts.limit));
			opts.page && queryString.push("page=" + encodeURIComponent(opts.page));
			opts.order && queryString.push("order=" + encodeURIComponent(opts.order));
			opts.sort && queryString.push("sort=" + encodeURIComponent(opts.sort));
		}
		return AroFlo.httpRequest.get("/inventory/customholders?" + queryString.join("&"));
	}
}

module.exports = InventoryCustomHolders;
module.exports.InventoryCustomHolders = InventoryCustomHolders;
