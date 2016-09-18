/**
 * Created by jack on 16-9-5.
 */

'use strict';

const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');

const baseConfig = require('./base');
const defaultSettings = require('./defaults');

const config = Object.assign({}, baseConfig, {
	cache: false,
	devtool: 'source-map',
	plugins: [
		new CleanPlugin([defaultSettings.buildPath]),
		new webpack.optimize.DedupePlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"production"'
		}),
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.AggressiveMergingPlugin()
	].concat(baseConfig.plugins)
});

module.exports = config;
