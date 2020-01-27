'use strict';
const path = require('path');
const config = require('./config.js');
const merge = require('webpack-merge');
const webpack = require('webpack');
const FriendlyErrors = require('friendly-errors-webpack-plugin');

module.exports = merge(config, {
	mode: 'development',

	devServer: {
		contentBase: path.join(__dirname, '../dist'),
		compress: true,
		host: '0.0.0.0',
		port: 5000,
		hot: true,
		quiet: true,
		overlay: {
			errors: true,
			warnings: true
		}
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new FriendlyErrors({
			compilationSuccessInfo: {
				messages: ['Available at: http://localhost:5000']
			}
		})

		//! API URL
		// new webpack.DefinePlugin({
		// 	API_URL: JSON.stringify('http://localhost:8000')
		// }),
	]
});
