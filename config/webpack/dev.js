/**
 * Created by jack on 16-9-5.
 */

'use strict';

const webpack = require('webpack');

const baseConfig = require('./base');
const defaultSettings = require('./defaults');

const config = Object.assign({}, baseConfig, {
	entry: {
		// ...baseConfig.entry,
		chunk: baseConfig.entry.chunk,
		app: [
			'webpack-hot-middleware/client?path=/__webpack_hmr&reload=true&timeout=20000r'
		].concat(baseConfig.entry.app)
	},
	cache: true,
	// eval-source-map can not debug in chrome
	devtool: 'inline-source-map',
	middlewareSetting: {
		publicPath: defaultSettings.publicPath,
		buildPath: defaultSettings.buildPath,
		stats: {
			colors: true,
			cached: false
		}
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	].concat(baseConfig.plugins)
});

module.exports = config;
