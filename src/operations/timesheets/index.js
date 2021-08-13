/**
 * This module was automatically generated from the OpenAPI specification
 * of the AroFlo Extended API located here: https://api.aroflo.com/openapi
 */
const __ENTRIES = require('./entries');
const __TIMERS = require('./timers');
const __OVERHEADS = require('./overheads');
const __DATELOCKS = require('./datelocks');
const __RATETYPES = require('./rateTypes');
const __EXPENSETYPES = require('./expenseTypes');
const __WORKTYPES = require('./workTypes');

module.exports = (AroFlo) => ({
	entries: __ENTRIES(AroFlo),
	
	timers: __TIMERS(AroFlo),
	
	overheads: __OVERHEADS(AroFlo),
	
	datelocks: __DATELOCKS(AroFlo),
	
	rateTypes: __RATETYPES(AroFlo),
	
	expenseTypes: __EXPENSETYPES(AroFlo),
	
	workTypes: __WORKTYPES(AroFlo)
});