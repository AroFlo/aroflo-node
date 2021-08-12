/**
 * This module was automatically generated from the OpenAPI specification
 * of the AroFlo Extended API located here: https://api.aroflo.com/openapi
 */
const __WORKTYPES = require('./worktypes');
const __PRIORITIES = require('./priorities');

module.exports = (AroFlo) => ({
	worktypes: __WORKTYPES(AroFlo),
	
	priorities: __PRIORITIES(AroFlo)
});