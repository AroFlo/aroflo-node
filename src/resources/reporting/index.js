'use strict';

const TrackingCentres = require('./trackingCentres');

function Reporting(AroFlo) {
	this.trackingCentres = new TrackingCentres(AroFlo);
}

module.exports = Reporting;
module.exports.Reporting = Reporting;
