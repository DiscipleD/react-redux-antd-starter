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

const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, config.middlewareSetting));
app.use(webpackHotMiddleware(compiler));

app.use('/', express.static(__dirname + '/build'));

app.listen(PORT, 'localhost', (err) => {
	if (err) {
		console.log(err);
	}
	console.log('Listening at localhost:' + PORT);
	console.log('Opening your system browser...');
	open('http://localhost:' + PORT);
});
