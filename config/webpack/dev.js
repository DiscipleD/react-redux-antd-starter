/**
 * Created by jack on 16-9-5.
 */

'use strict';

const webpack = require('webpack');

const baseConfig = require('./base');

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
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"dev"'
		})
	].concat(baseConfig.plugins)
});

module.exports = config;
