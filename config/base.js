/**
 * Created by jack on 16-9-5.
 */

'use strict';

let defaultSettings = require('./defaults');

module.exports = {
	debug: true,
	devtool: 'eval',
	entry: {
		app: [defaultSettings.sourcePath + '/index.js'],
		chunk: ['react', 'react-redux', 'react-router']
	},
	output: {
		path: defaultSettings.buildPath,
		filename: '[name].[hash:8].js',
		publicPath: defaultSettings.publicPath
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	postcss: defaultSettings.postcss,
	module: defaultSettings.getDefaultModules(),
	plugins: defaultSettings.getDefaultPlugins()
};
