'use strict';
const config = require('./config.js');
const merge = require('webpack-merge');

const Terser = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// const webpack = require('webpack');

module.exports = merge(config, {
	mode: 'production',

	output: {
		publicPath: '/'
	},

	optimization: {
		minimizer: [
			new Terser({
				cache: true,
				parallel: true,
				sourceMap: false,
				terserOptions: {
					compress: {
						dead_code: true,
						conditionals: true,
						booleans: true,
						ecma: 6
					}
				}
			})
		]
	},

	plugins: [
		new CleanWebpackPlugin()

		//! API URL
		// new webpack.DefinePlugin({
		// 	API_URL: JSON.stringify('https://'),
		// }),
	]
});
