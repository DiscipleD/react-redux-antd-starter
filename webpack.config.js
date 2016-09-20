/**
 * Created by jack on 16-9-5.
 */

'use strict';

const path = require('path');
const args = require('minimist')(process.argv.slice(2));

// List of allowed environments
const allowedEnvs = ['dev', 'build'];

// Set the correct environment
let env;
if (args.env) {
	env = args.env;
} else {
	env = 'dev';
}
process.env.REACT_WEBPACK_ENV = env;

/**
 * Build the webpack configuration
 * @param  {String} wantedEnv The wanted environment
 * @return {Object} Webpack config
 */
function buildConfig(wantedEnv) {
	const isValid = wantedEnv && wantedEnv.length > 0 && allowedEnvs.indexOf(wantedEnv) !== -1;
	const validEnv = isValid ? wantedEnv : 'dev';
	const config = require(path.join(__dirname, 'config/webpack/' + validEnv));
	return config;
}

module.exports = buildConfig(env);
