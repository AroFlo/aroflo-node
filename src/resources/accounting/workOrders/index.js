'use strict';

const Utils =  require('../../../utils');

function WorkOrders(AroFlo) {
	/**
     * API call to retrieve a single work order.
     */
    this.get = async (id) => AroFlo.httpRequest.get("/accounting/workorders/" + id);

}

module.exports = WorkOrders;
module.exports.WorkOrders = WorkOrders;
