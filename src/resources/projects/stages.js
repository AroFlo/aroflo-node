'use strict';

const Utils =  require('../../utils');
const ProjectStageTypes = require('./stageTypes');

function ProjectStages(AroFlo) {
	/**
     * API call to retrieve a single project stage.
     */
    this.get = async (project_id, id) => AroFlo.httpRequest.get("/projects/" + project_id + "/stages/" + id);

	/**
	 * API call to retrieve a list of project stages.
	 */
	this.list = async (project_id, opts) => {
		const queryString = [];
		if (opts) {
			Utils.appendStringSearchToQueryStringList(queryString, "name", opts.name);
			Utils.appendCSVToQueryStringList(queryString, "status", opts.status);
		}
		return AroFlo.httpRequest.get("/projects/" + project_id + "/stages?" + queryString.join("&"));
	}

	// project stage types
	this.types = new ProjectStageTypes(AroFlo);
}

module.exports = ProjectStages;
module.exports.ProjectStages = ProjectStages;
