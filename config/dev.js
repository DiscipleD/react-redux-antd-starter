/**
 * Created by jack on 16-9-5.
 */

'use strict';

const webpack = require('webpack');

const baseConfig = require('./base');
const defaultSettings = require('./defaults');

const config = Object.assign({}, baseConfig, {
	entry: [
		'webpack-hot-middleware/client?path=/__webpack_hmr&reload=true&timeout=20000r'
	].concat(baseConfig.entry.app),
	cache: true,
	devtool: 'eval-source-map',
	middlewareSetting: {
		publicPath: defaultSettings.publicPath,
		stats: {
			colors: true,
			cached: false
		}
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	].concat(baseConfig.plugins)
});

module.exports = config;

