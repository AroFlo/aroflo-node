'use strict';

const Utils =  require('../../utils');

function Messages(AroFlo) {
	const self = this;

	/**
     * API call to retrieve a list of messages from the message board.
     */
    this.list = async (opts) => {
        const queryString = [];
        if (typeof opts == "object") {
            Utils.appendDateRangeToQueryStringList(queryString, "expiry", opts.expiry);
        }
        return AroFlo.httpRequest.get("/messageboard/messages?" + queryString.join("&"));
    }

	/**
     * API call to retrieve a single message from the message board.
     */
    this.get = async (id) => AroFlo.httpRequest.get("/messageboard/messages/" + id);

	/**
     * API call to delete a single message fromthe message board.
     */
    this.delete = async (id) => AroFlo.httpRequest.delete("/messageboard/messages/" + id);
}

module.exports = Messages;
module.exports.Messages = Messages;
