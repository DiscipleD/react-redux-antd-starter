/**
 * Created by jack on 16-9-5.
 */

'use strict';

const defaultSettings = require('./defaults');

module.exports = {
	debug: true,
	devtool: 'eval',
	entry: {
		chunk: ['react', 'react-dom', 'react-redux', 'react-router',
			'react-router-redux', 'redux' , 'redux-actions', 'redux-logger', 'redux-promise'],
		app: [defaultSettings.sourcePath + '/index.js']
	},
	output: {
		path: defaultSettings.buildPath,
		filename: '[name].[hash:8].js',
		publicPath: defaultSettings.publicPath
	},
	resolve: defaultSettings.resolve,
	postcss: defaultSettings.postcss,
	module: defaultSettings.getDefaultModules(),
	plugins: defaultSettings.getDefaultPlugins()
};
