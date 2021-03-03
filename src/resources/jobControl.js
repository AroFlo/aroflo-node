'use strict';

function JobControl(AroFlo) {
	/**
     * API call to retrieve a list of JobControl items.
     */
    this.list = async (opts) => {
        const queryString = [];
        if (typeof opts !== "undefined" && typeof opts.applied_to !== "undefined") {
			queryString.push("applied_to=" + opts.applied_to);
        }
        return AroFlo.httpRequest.get("/jobcontrol?" + queryString.join("&"));
    }

}

module.exports = JobControl;
module.exports.JobControl = JobControl;
