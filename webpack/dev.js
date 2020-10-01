// Development webpack config, configures webpack-dev-server and friendly errors
'use strict';

const path = require('path');
const config = require('./config.js');
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const FriendlyErrors = require('friendly-errors-webpack-plugin');

module.exports = merge(config, {
	mode: 'development',
	devtool: 'cheap-module-source-map',

	// webpack-dev-server settings
	devServer: {
		contentBase: path.join(__dirname, '../dist'),
		compress: true,
		host: '0.0.0.0',
		port: 5000,
		hot: true,
		quiet: true,
		overlay: {
			errors: true,
			warnings: true,
		},
	},

	resolve: {
		alias: {
			Root: path.resolve(__dirname, '../src/'),
			Components: path.resolve(__dirname, '../src/components/'),
			Pages: path.resolve(__dirname, '../src/pages/'),
		},
	},

	plugins: [
		// Replace modules without stopping webpack-dev-server
		new webpack.HotModuleReplacementPlugin(),

		// Friendly errors plugin shows much more human friendly errors in the console
		new FriendlyErrors({
			compilationSuccessInfo: {
				messages: ['Available at: http://localhost:5000'],
			},
		}),
	],
});
