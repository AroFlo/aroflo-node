/**
 * This module was automatically generated from the OpenAPI specification
 * of the AroFlo Extended API located here: https://api.aroflo.com/openapi
 */
const __TYPES = require('./types');
const __CATEGORIES = require('./categories');

module.exports = (AroFlo) => ({
	types: __TYPES(AroFlo),
	
	categories: __CATEGORIES(AroFlo)
});