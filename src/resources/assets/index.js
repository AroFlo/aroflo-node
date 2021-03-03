'use strict';

const AssetCategories =  require('./categories');
const AssetTypes =  require('./types');

function Assets(AroFlo) {
	this.categories = new AssetCategories(AroFlo);
	this.types = new AssetTypes(AroFlo);
}

module.exports = Assets;
module.exports.Assets = Assets;
