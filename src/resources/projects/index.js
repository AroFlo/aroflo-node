'use strict';

const Utils =  require('../../utils');

const ProjectStages = require('./stages');
const ProjectTypes = require('./types');

function Projects(AroFlo) {
	/**
     * API call to retrieve a single project.
     */
    this.get = async (id) => AroFlo.httpRequest.get("/projects/" + id);

	/**
	 * API call to retrieve a list of projects.
	 */
	this.list = async (opts) => {
		const queryString = [];
		if (opts) {
			opts.applied_to && queryString.push("applied_to=" + encodeURIComponent(opts.applied_to));
			opts.belongs_to && queryString.push("belongs_to=" + encodeURIComponent(opts.belongs_to));
			Utils.appendStringSearchToQueryStringList(queryString, "client_name", opts.client_name);
			opts.limit && queryString.push("limit=" + encodeURIComponent(opts.limit));
			Utils.appendStringSearchToQueryStringList(queryString, "name", opts.name);
			opts.order && queryString.push("order=" + encodeURIComponent(opts.order));
			opts.page && queryString.push("page=" + encodeURIComponent(opts.page));
			Utils.appendStringSearchToQueryStringList(queryString, "project_number", opts.project_number);
			Utils.appendStringSearchToQueryStringList(queryString, "reference", opts.reference);
			opts.sort && queryString.push("sort=" + encodeURIComponent(opts.sort));
			Utils.appendStringSearchToQueryStringList(queryString, "stage_name", opts.stage_name);
			Utils.appendCSVToQueryStringList(queryString, "status", opts.status);
		}
		return AroFlo.httpRequest.get("/projects?" + queryString.join("&"));
	}

	// project stages
	this.stages = new ProjectStages(AroFlo);

	// project types
	this.types = new ProjectTypes(AroFlo);
}

module.exports = Projects;
module.exports.Projects = Projects;
