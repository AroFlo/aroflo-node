'use strict';

const Utils =  require('../../utils');

function AssetCategories(AroFlo) {
	/**
     * API call to retrieve a single asset category.
     */
    this.get = async (id) => AroFlo.httpRequest.get("/assets/categories/" + id);
}

module.exports = AssetCategories;
module.exports.AssetCategories = AssetCategories;
