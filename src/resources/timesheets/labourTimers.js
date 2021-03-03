'use strict';

const Utils =  require('../../utils');

function LabourTimers(AroFlo) {
	/**
     * API call to retrieve a single labour timer.
     */
    this.get = async (id) => AroFlo.httpRequest.get("/timesheets/timers/" + id);

	/**
	 * API call to retrieve a list of labour timers.
	 */
	this.list = async (opts) => {
		const queryString = [];
		if (opts) {
            opts.belongs_to && queryString.push("belongs_to=" + encodeURIComponent(opts.belongs_to));
            opts.task && queryString.push("task=" + encodeURIComponent(opts.task));
        }
		return AroFlo.httpRequest.get("/timesheets/timers?" + queryString.join("&"));
	}
}

module.exports = LabourTimers;
module.exports.LabourTimers = LabourTimers;
