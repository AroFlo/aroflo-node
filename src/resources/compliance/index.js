'use strict';

const ComplianceAlerts = require('./alerts');

function Compliance(AroFlo) {
	this.alerts = new ComplianceAlerts(AroFlo);
}

module.exports = Compliance;
module.exports.Compliance = Compliance;
