'use strict';

function GraphQL(AroFlo) {
    const self = this;

	this.query = async (query, params) => AroFlo.httpRequest.post("/graphql", null, {
		query: query
		, variables: params || {}
		, operationName: ""
	});
}

module.exports = GraphQL;
module.exports.GraphQL = GraphQL;
