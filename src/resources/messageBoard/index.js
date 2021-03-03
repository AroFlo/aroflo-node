'use strict';

const Messages = require('./messages');

function MessageBoard(AroFlo) {
	this.messages = new Messages(AroFlo);
}

module.exports = MessageBoard;
module.exports.MessageBoard = MessageBoard;
