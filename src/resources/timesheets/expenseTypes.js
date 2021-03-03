'use strict';

const Utils =  require('../../utils');

function ExpenseTypes(AroFlo) {
	/**
     * API call to retrieve a single expense type.
     */
    this.get = async (id) => AroFlo.httpRequest.get("/timesheets/expensetypes/" + id);
}

module.exports = ExpenseTypes;
module.exports.ExpenseTypes = ExpenseTypes;
