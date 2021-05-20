/**
 * This module was automatically generated from the OpenAPI specification
 * of the AroFlo Extended API located here: https://api.aroflo.com/openapi
 */
const __PRIORITIES = require('./priorities');
const __HOURSOFWORKWEEK = require('./hoursOfWorkWeek');

module.exports = (AroFlo) => ({
	priorities: __PRIORITIES(AroFlo),
	
	hoursOfWorkWeek: __HOURSOFWORKWEEK(AroFlo)
});