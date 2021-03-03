'use strict';

function Zones(AroFlo) {
    const self = this;

    /**
     * API call to retrieve all posts the user has access too.
     */
    this.getAllZones = async () => AroFlo.httpRequest.get("/zones", undefined);
}

module.exports = Zones;
module.exports.Zones = Zones;
