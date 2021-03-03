'use strict';

const Utils =  require('../../utils');

function AssetTypes(AroFlo) {
	/**
     * API call to retrieve a single asset type.
     */
    this.get = async (id) => AroFlo.httpRequest.get("/assets/types/" + id);

	/**
	 * API call to retrieve a list of asset types.
	 */
	this.list = async (opts) => {
		const queryString = [];
		if (opts) {
            Utils.appendBooleanToQueryStringList(queryString, "archived", opts.archived);
            Utils.appendStringSearchToQueryStringList(queryString, "name", opts.name);
			opts.order && queryString.push("order=" + encodeURIComponent(opts.order));
			opts.sort && queryString.push("sort=" + encodeURIComponent(opts.sort));
		}
		return AroFlo.httpRequest.get("/assets/types?" + queryString.join("&"));
	}
}

module.exports = AssetTypes;
module.exports.AssetTypes = AssetTypes;
