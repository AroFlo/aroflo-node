/**
 * This module was automatically generated from the OpenAPI specification
 * of the AroFlo Extended API located here: https://api.aroflo.com/openapi
 */
const __PROJECTS = require('./projects');
const __MESSAGEBOARD = require('./messageBoard');
const __PERMISSIONGROUPS = require('./permissiongroups');
const __ACCOUNTING = require('./accounting');
const __INVENTORY = require('./inventory');
const __USERS = require('./users');
const __BUSINESSUNITS = require('./businessUnits');
const __PRIORITIES = require('./priorities');
const __ASSETS = require('./assets');
const __APIVERSION = require('./apiVersion');
const __TIMESHEETS = require('./timesheets');
const __GEOGRAPHY = require('./geography');
const __COMPLIANCE = require('./compliance');
const __JOBCONTROL = require('./jobControl');
const __LOCATIONS = require('./locations');
const __ORGS = require('./orgs');
const __GRAPHQL = require('./graphql');
const __TRANSACTIONTERMS = require('./transactionTerms');
const __REPORTING = require('./reporting');

module.exports = (AroFlo) => ({
	projects: __PROJECTS(AroFlo),
	
	messageBoard: __MESSAGEBOARD(AroFlo),
	
	permissiongroups: __PERMISSIONGROUPS(AroFlo),
	
	accounting: __ACCOUNTING(AroFlo),
	
	inventory: __INVENTORY(AroFlo),
	
	users: __USERS(AroFlo),
	
	businessUnits: __BUSINESSUNITS(AroFlo),
	
	priorities: __PRIORITIES(AroFlo),
	
	assets: __ASSETS(AroFlo),
	
	apiVersion: __APIVERSION(AroFlo),
	
	timesheets: __TIMESHEETS(AroFlo),
	
	geography: __GEOGRAPHY(AroFlo),
	
	compliance: __COMPLIANCE(AroFlo),
	
	jobControl: __JOBCONTROL(AroFlo),
	
	locations: __LOCATIONS(AroFlo),
	
	orgs: __ORGS(AroFlo),
	
	graphql: __GRAPHQL(AroFlo),
	
	transactionTerms: __TRANSACTIONTERMS(AroFlo),
	
	reporting: __REPORTING(AroFlo)
});