/**
 * This module was automatically generated from the OpenAPI specification
 * of the AroFlo Extended API located here: https://api.aroflo.com/openapi
 */
const __PROJECTS = require('./projects');
const __MESSAGEBOARD = require('./messageBoard');
const __ACCOUNTING = require('./accounting');
const __INVENTORY = require('./inventory');
const __USERS = require('./users');
const __ASSETS = require('./assets');
const __APIVERSION = require('./apiVersion');
const __TIMESHEETS = require('./timesheets');
const __COMPLIANCE = require('./compliance');
const __JOBCONTROL = require('./jobControl');
const __LOCATIONS = require('./locations');
const __TRANSACTIONTERMS = require('./transactionTerms');
const __GRAPHQL = require('./graphql');
const __REPORTING = require('./reporting');

module.exports = (AroFlo) => ({
	projects: __PROJECTS(AroFlo),
	
	messageBoard: __MESSAGEBOARD(AroFlo),
	
	accounting: __ACCOUNTING(AroFlo),
	
	inventory: __INVENTORY(AroFlo),
	
	users: __USERS(AroFlo),
	
	assets: __ASSETS(AroFlo),
	
	apiVersion: __APIVERSION(AroFlo),
	
	timesheets: __TIMESHEETS(AroFlo),
	
	compliance: __COMPLIANCE(AroFlo),
	
	jobControl: __JOBCONTROL(AroFlo),
	
	locations: __LOCATIONS(AroFlo),
	
	transactionTerms: __TRANSACTIONTERMS(AroFlo),
	
	graphql: __GRAPHQL(AroFlo),
	
	reporting: __REPORTING(AroFlo)
});