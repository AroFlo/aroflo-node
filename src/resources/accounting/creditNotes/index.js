'use strict';

const Utils =  require('../../../utils');

function CreditNotes(AroFlo) {
	const self = this;
	/**
     * API call to retrieve a single credit note.
     */
    this.get = async (id) => AroFlo.httpRequest.get("/accounting/creditnotes/" + id);

	/**
	 * API call to retrieve a list of credit notes.
	 */
	this.list = async (opts) => {
		const queryString = [];
		if (opts) {
			opts.applied_to && queryString.push("applied_to=" + encodeURIComponent(opts.applied_to.trim().toUpperCase()));
			opts.belongs_to && queryString.push("belongs_to=" + encodeURIComponent(opts.belongs_to.trim().toUpperCase()));
			if (opts.created) {
				opts.created.since && queryString.push("created.since=" + Utils.formatDate(opts.created.since));
				opts.created.until && queryString.push("created.until=" + Utils.formatDate(opts.created.until));
			}
			opts.credit_note_number && queryString.push("credit_note_number=" + encodeURIComponent(opts.credit_note_number));
			queryString.push("include_children=" + (opts.include_children ? "TRUE" : "FALSE"));
			opts.limit && queryString.push("limit=" + encodeURIComponent(opts.limit));
			opts.order && queryString.push("order=" + encodeURIComponent(opts.order));
			opts.page && queryString.push("page=" + encodeURIComponent(opts.page));
			opts.reference && queryString.push("reference=" + encodeURIComponent(opts.reference));
			opts.sort && queryString.push("sort=" + encodeURIComponent(opts.sort));
			opts.status && queryString.push("status=" + encodeURIComponent(opts.status));
			opts.type && queryString.push("type=" + encodeURIComponent(opts.type));
		}
		return AroFlo.httpRequest.get("/accounting/creditnotes?" + queryString.join("&"));
	}

}

module.exports = CreditNotes;
module.exports.CreditNotes = CreditNotes;
