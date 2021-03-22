/**
 * This module was automatically generated from the OpenAPI specification
 * of the AroFlo Extended API located here: https://api.aroflo.com/openapi
 */
const __COUNTRIES = require('./countries');
const __STATES = require('./states');

module.exports = (AroFlo) => ({
	countries: __COUNTRIES(AroFlo),
	
	states: __STATES(AroFlo)
});