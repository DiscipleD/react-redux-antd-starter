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
const publicPath = '';
const resolve = {
	extensions: ['.js', '.jsx', '.json'],
	alias: {
		common: `${sourcePath}/common`,
		containers: `${sourcePath}/containers`,
		components: `${sourcePath}/components`,
		actions: `${sourcePath}/redux/actions`
	}
};

function getDefaultModules() {
	return {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: 'eslint-loader',
				enforce: "pre",
				exclude: /node_modules/
			},
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(sc|c)ss$/,
				use: [
					'style-loader',
					'css-loader?sourceMap',
					{
						loader: 'postcss-loader?sourceMap',
						options: {
							plugins: () => [autoprefixer({browsers: ['last 2 versions']})]
						}
					}, {
						loader: 'sass-loader',
						options: {
							outputStyle: 'expanded'
						}
					}]
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: [{
					loader: 'file-loader',
					options: {
						hash: 'sha512',
						digest: 'hex',
						name: '[path][name]-[hash:8].[ext]'
					}
				}, {
					loader: 'image-webpack-loader',
					options: {
						bypassOnDebug: true,
						optimizationLevel: 7,
						interlaced: false
					}
				}]
			},
			{
				test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url-loader?limit=8192&mimetype=application/font-woff&prefix=fonts'
			},
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url-loader?limit=8192&mimetype=application/octet-stream&prefix=fonts'
			},
			{
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url-loader?limit=8192&mimetype=application/vnd.ms-fontobject&prefix=fonts'
			},
			{
				test: /\.(mp4|ogg)$/,
				loader: 'file-loader?hash=sha512&digest=hex&name=[path][name]-[hash:8].[ext]'
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
		new webpack.NoEmitOnErrorsPlugin()
	];
}

module.exports = {
	sourcePath,
	buildPath,
	publicPath,
	resolve,
	getDefaultModules,
	getDefaultPlugins
};
