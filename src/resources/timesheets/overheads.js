'use strict';

const Utils =  require('../../utils');

function Overheads(AroFlo) {
	/**
     * API call to retrieve a single overhead.
     */
    this.get = async (id) => AroFlo.httpRequest.get("/timesheets/overheads/" + id);
}

module.exports = Overheads;
module.exports.Overheads = Overheads;
