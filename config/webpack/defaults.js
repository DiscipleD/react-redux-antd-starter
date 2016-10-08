/**
 * Created by jack on 16-9-5.
 */

'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const sourcePath = path.join(__dirname, '../../src');
const buildPath = path.join(__dirname, '../../build');
const publicPath = '/';
const resolve = {
	extensions: ['', '.js', '.jsx'],
	alias: {
		common: `${sourcePath}/common`,
		containers: `${sourcePath}/containers`,
		components: `${sourcePath}/components`,
		actions: `${sourcePath}/redux/actions`
	}
};
const postcss = [autoprefixer({browsers: ['last 2 versions']})];

function getDefaultModules() {
	return {
		preLoaders: [{
			test: /\.(js|jsx)$/,
			loader: 'eslint',
			include: sourcePath
		}],
		loaders: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel',
				include: sourcePath,
			},
			{
				test: /\.css$/,
				loader: 'style!css!postcss'
			},
			{
				test: /\.sass/,
				loader: 'style!css!postcss!sass?outputStyle=expanded&indentedSyntax'
			},
			{
				test: /\.scss/,
				loader: 'style!css!postcss!sass?outputStyle=expanded'
			},
			{
				test: /\.less/,
				loader: 'style!css!postcss!less'
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loaders: [
					'file?hash=sha512&digest=hex&name=[path][name]-[hash:8].[ext]',
					'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
				]
			},
			{
				test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url?limit=8192&mimetype=application/font-woff&prefix=fonts'
			},
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url?limit=8192&mimetype=application/octet-stream&prefix=fonts'
			},
			{
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url?limit=8192&mimetype=application/vnd.ms-fontobject&prefix=fonts'
			},
			{
				test: /\.(mp4|ogg)$/,
				loader: 'file?hash=sha512&digest=hex&name=[path][name]-[hash:8].[ext]'
			}
		]
	};
}

function getDefaultPlugins() {
	return [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'chunk',
			filename: 'chunk.[hash:8].js'
		}),
		new HtmlWebpackPlugin({
			template: sourcePath + '/index.html'
		}),
		new webpack.NoErrorsPlugin()
	];
}

module.exports = {
	sourcePath,
	buildPath,
	publicPath,
	resolve,
	postcss,
	getDefaultModules,
	getDefaultPlugins
};
