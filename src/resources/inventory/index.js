'use strict';

const InventoryCustomHolders = require('./customHolders');

function Inventory(AroFlo) {
	this.customHolders = new InventoryCustomHolders(AroFlo);
}

module.exports = Inventory;
module.exports.Inventory = Inventory;
