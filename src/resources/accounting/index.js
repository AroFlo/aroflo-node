'use strict';

const CreditNotes =  require('./creditNotes');
const WorkOrders =  require('./workOrders');

function Accounting(AroFlo) {
	this.creditNotes = new CreditNotes(AroFlo);
	this.workOrders = new WorkOrders(AroFlo);
}

module.exports = Accounting;
module.exports.Accounting = Accounting;
