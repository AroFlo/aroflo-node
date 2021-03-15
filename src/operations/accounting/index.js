/**
 * This module was automatically generated from the OpenAPI specification
 * of the AroFlo Extended API located here: https://api.aroflo.com/openapi
 */
const __WORKORDERS = require('./workOrders');
const __CREDITNOTES = require('./creditNotes');

module.exports = (AroFlo) => ({
	workOrders: __WORKORDERS(AroFlo),
	
	creditNotes: __CREDITNOTES(AroFlo)
});