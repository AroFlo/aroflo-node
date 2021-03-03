'use strict';

const Utils =  require('../../utils');

function ProjectStageTypes(AroFlo) {
	/**
     * API call to retrieve a single project stage type.
     */
    this.get = async (project_id, id) => AroFlo.httpRequest.get("/projects/stages/types/" + id);

	/**
	 * API call to retrieve a list of project stage types.
	 */
	this.list = async (project_id, opts) => {
		const queryString = [];
		if (opts) {
			Utils.appendBooleanToQueryStringList(queryString, "archived", opts.archived);
			opts.order && queryString.push("order=" + encodeURIComponent(opts.order));
			opts.sort && queryString.push("sort=" + encodeURIComponent(opts.sort));
		}
		return AroFlo.httpRequest.get("/projects/stages/types?" + queryString.join("&"));
	}
}

module.exports = ProjectStageTypes;
module.exports.ProjectStageTypes = ProjectStageTypes;
