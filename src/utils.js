'use strict';

const utils = (module.exports = {
	/**
	 * Allow for special capitalization cases (such as OAuth)
	 */
	pascalToCamelCase: (name) => {
		if (name === 'OAuth') {
			return 'oauth';
		} else {
			return name[0].toLowerCase() + name.substring(1);
		}
	},

	/**
	 * https://stackoverflow.com/a/2117523
	 */
	uuid4: () => {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
			const r = (Math.random() * 16) | 0;
			const v = c === 'x' ? r : (r & 0x3) | 0x8;
			return v.toString(16);
		});
	}

	/**
	 * Formats a Date into YYYY-MM-DD
	 */
	,formatDate: withDate => {
		const fromDate = new Date(withDate);
		const year = fromDate.getFullYear();
		const month = (fromDate.getMonth() < 9 ? '0': '') + (fromDate.getMonth()+1);
		const day =  (fromDate.getDate() < 10 ? '0' : '') + fromDate.getDate();
		return "" + year + "-" + month + "-" + day;
	}

	/**
	 * Appends a boolean based value to a provided list representing the parts of a Query String.
	 */
	,appendBooleanToQueryStringList: (list, fieldName, value) => {
		if (typeof list == "undefined"
				|| typeof fieldName == "undefined"
				|| typeof value == "undefined"
				|| value == null) {
			return;
		}

		list.push(fieldName + "=" + (value ? "TRUE" : "FALSE"));
	}

	/**
	 * Appends a string based value to a provided list representing the parts of a Query String.
	 */
	,appendStringSearchToQueryStringList: (list, fieldName, value) => {
		if (typeof list == "undefined"
				|| typeof fieldName == "undefined"
				|| typeof value == "undefined"
				|| value == null) {
			return;
		}

		if (typeof value == "string") {
			list.push(fieldName + "=" + encodeURIComponent(value));
		}

		if (typeof value == "object") {
			value.begins_with && list.push(fieldName + ".begins_with=" + encodeURIComponent(value.begins_with));
			value.equals && list.push(fieldName + ".equals=" + encodeURIComponent(value.equals));
			value.like && list.push(fieldName + ".like=" + encodeURIComponent(value.like));
		}
	}

	/**
	 * Appends a comma seperated list based value to a provided list representing the parts of a Query String.
	 */
	,appendCSVToQueryStringList: (list, fieldName, value) => {
		if (typeof list == "undefined"
				|| typeof fieldName == "undefined"
				|| typeof value == "undefined"
				|| value == null) {
			return;
		}

		if (typeof value == "string") {
			list.push(fieldName + "=" + encodeURIComponent(value));
		}

		if (typeof value == "array") {
			list.push(fieldName + "=" + encodeURIComponent(value.join(",")));
		}
	}

	/**
	 * Appends a timestamp (from-until) based value to a provided list representing the parts of a Query String.
	 */
	,appendDateRangeToQueryStringList: (list, fieldName, value) => {
		if (typeof list == "undefined"
				|| typeof fieldName == "undefined"
				|| typeof value == "undefined"
				|| value == null) {
			return;
		}

		if (typeof value.from !== "undefined") {
			list.push(fieldName + ".from=" + utils.formatDate(value.from));
		}
		if (typeof value.since !== "undefined") {
			list.push(fieldName + ".since=" + utils.formatDate(value.since));
		}
		if (typeof value.until !== "undefined") {
			list.push(fieldName + ".until=" + utils.formatDate(value.until));
		}
	}

	,flattenObjectIntoDotNotation: (obj) => {
	    const flattenObject = {};

        for (const key in obj) {
            if (!obj.hasOwnProperty(key)) {
                continue;
            }

            if (typeof obj[key] == "object" && !Array.isArray(obj[key])) {
                const otherObj = utils.flattenObjectIntoDotNotation(obj[key]);
                for (const otherKey in otherObj) {
                    if (!otherObj.hasOwnProperty(otherKey)) {
                        continue;
                    }
                    flattenObject[key + "." + otherKey] = otherObj[otherKey];
                }
            } else {
                flattenObject[key] = obj[key];
            }
        }

        return flattenObject;
	}

});
