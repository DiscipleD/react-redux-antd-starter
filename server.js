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

const PORT = parseInt(process.env.PORT || 8080);
const app = new express();

app.use((req, res, next) => {
	req.url = req.url.replace(/^\/[^(.|_)]*$/, '/');
	next();
});

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
app.use(express.static(config.output.path));

app.listen(PORT, err => {
	err && console.log(err);
	console.log('Listening at localhost:' + PORT);
	console.log('Opening your system browser...');
	open('http://localhost:' + PORT);
});
