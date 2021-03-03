'use strict';

const ExpenseTypes = require('./expenseTypes');
const LabourTimers = require('./labourTimers');
const Overheads = require('./overheads');
const RateTypes = require('./rateTypes');
const WorkTypes = require('./workTypes');

function Reporting(AroFlo) {
	this.expenseTypes = new ExpenseTypes(AroFlo);
	this.timers = new LabourTimers(AroFlo);
	this.overheads = new Overheads(AroFlo);
	this.rateTypes = new RateTypes(AroFlo);
	this.workTypes = new WorkTypes(AroFlo);
}

module.exports = Reporting;
module.exports.Reporting = Reporting;
