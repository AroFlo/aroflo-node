/**
 * This module was automatically generated from the OpenAPI specification
 * of the AroFlo Extended API located here: https://api.aroflo.com/openapi
 */


module.exports = (AroFlo) => ({
	/**
	 * Retrieve Asset Category.
	 * 
	 * Retrieves the specified AssetCategory.
	 */
	get: async (assetcategory) => {
		// validate path parameters
		if (assetcategory === undefined || assetcategory == null) {
			throw new Error("`assetcategory` is a required argument and must be provided a non-null value.");
		}
		
		return AroFlo.httpRequest.get(`/assets/categories/${assetcategory}`, {});
	}
});