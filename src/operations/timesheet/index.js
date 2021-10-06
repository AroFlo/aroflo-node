/**
 * This module was automatically generated from the OpenAPI specification
 * of the AroFlo Extended API located here: https://api.aroflo.com/openapi
 */
const __ENTRIES = require('./entries');
const __REIMBURSEMENTS = require('./reimbursements');

module.exports = (AroFlo) => ({
	entries: __ENTRIES(AroFlo),
	
	reimbursements: __REIMBURSEMENTS(AroFlo)
});