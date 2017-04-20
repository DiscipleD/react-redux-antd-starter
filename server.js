/**
 * Created by jack on 16-9-5.
 */

'use strict';

const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config');
const open = require('open');

const args = require('minimist')(process.argv.slice(2));
const PORT = parseInt(process.env.PORT || 8080);
const app = new express();

app.use((req, res, next) => {
	req.url = req.url.replace(/^\/[^(.|_)]*$/, '/');
	next();
});

if (args.env !== 'build') {
	const middlewareSetting = {
		publicPath: config.publicPath,
		buildPath: config.buildPath,
		stats: {
			colors: true,
			cached: false
		}
	};

	const compiler = webpack(config);
	app.use(webpackDevMiddleware(compiler, middlewareSetting));
	app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(config.output.path));

app.listen(PORT, err => {
	err && console.log(err);
	args.env !== 'build' && open('http://localhost:' + PORT);
});
