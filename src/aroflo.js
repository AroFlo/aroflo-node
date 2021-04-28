'use strict';

const operations = require('./operations');
const utils = require('./utils');

AroFlo.DEFAULT_PROTOCOL = "https";
AroFlo.DEFAULT_HOST = "api.aroflo.com";
AroFlo.DEFAULT_PORT = '443';
AroFlo.DEFAULT_BASE_PATH = '';

AroFlo.PACKAGE_VERSION = require('../package.json').version;

AroFlo.USER_AGENT = {
	bindings_version: AroFlo.PACKAGE_VERSION,
	lang: 'node',
	lang_version: process.version,
	platform: process.platform,
	publisher: 'aroflo'
};

const ALLOWED_CONFIG_PROPERTIES = [
	'httpAgent'
	, 'protocol'
	, 'host'
	, 'port'
	, 'withCredentials'
	, 'basePath'
	, 'publicPersonalToken'
	, 'secretSigningKey'
];

function AroFlo(config = {}) {
	if (!(this instanceof AroFlo)) {
		return new AroFlo(config);
	}

	const props = this._getPropsFromConfig(config);

	this._api = {
		auth: null
		, protocol: props.protocol || AroFlo.DEFAULT_PROTOCOL
		, host: props.host || AroFlo.DEFAULT_HOST
		, port: props.port || AroFlo.DEFAULT_PORT
		, basePath: props.basePath || AroFlo.DEFAULT_BASE_PATH
		, agent: props.httpAgent || null
		, dev: false
		, withCredentials: props.withCredentials || false
		, publicPersonalToken: props.publicPersonalToken || null
		, secretSigningKey: props.secretSigningKey || null
	};

	this.errors = require('./error');
	this.utils = utils;
	this.httpRequest = require('./httpRequest')(this);

    // copy across the rest endpoints
    const opts = operations(this);
    for (const name in opts) {
        this[utils.pascalToCamelCase(name)] = opts[name];
    }
}

AroFlo.errors = require('./error');

AroFlo.prototype = {

	getApiField(key) {
	  return this._api[key];
	},

	_setApiField(key, value) {
		this._api[key] = value;
	},

	_getPropsFromConfig(config) {
		// If config is null or undefined, just bail early with no props
		if (!config) {
		  return {};
		}

		// config can be an object or a string
		const isString = typeof config === 'string';
		const isObject = config === Object(config) && !Array.isArray(config);

		if (!isObject) {
		  throw new Error('Config must be an object');
		}

		// If config is an object, we assume the new behavior and make sure it doesn't contain any unexpected values
		const values = Object.keys(config).filter(
		  (value) => !ALLOWED_CONFIG_PROPERTIES.includes(value)
		);

		if (values.length > 0) {
		  throw new Error(
			`Config object may only contain the following: ${ALLOWED_CONFIG_PROPERTIES.join(
			  ', '
			)}`
		  );
		}

		return config;
	},
};

module.exports = AroFlo;
module.exports.AroFlo = AroFlo;
