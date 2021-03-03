'use strict';

const Utils =  require('../../utils');

function ProjectTypes(AroFlo) {
	/**
     * API call to retrieve a single project type.
     */
    this.get = async (id) => AroFlo.httpRequest.get("/projects/types/" + id);

	/**
	 * API call to retrieve a list of project types.
	 */
	this.list = async (opts) => {
		const queryString = [];
		if (opts) {
			Utils.appendBooleanToQueryStringList(queryString, "archived", opts.archived);
		}
		return AroFlo.httpRequest.get("/projects/types?" + queryString.join("&"));
	}
}

module.exports = ProjectTypes;
module.exports.ProjectTypes = ProjectTypes;
