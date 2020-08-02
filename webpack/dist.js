// Distribution webpack config, configures optimization and minimization
'use strict';

const config = require('./config.js');
const { merge } = require('webpack-merge');
const webpack = require('webpack');

const Terser = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(config, {
	mode: 'production',

	// Configure where the output folder should be
	output: {
		publicPath: '/',
	},

	// Specify Terser configuration
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
						ecma: 6,
					},
				},
			}),
		],
	},

	plugins: [
		// Clean plugin removed output directory before building to avoid conflicts
		new CleanWebpackPlugin(),

		// Specify API url to use different urls in dev and dist modes
		new webpack.DefinePlugin({
			API_URL: JSON.stringify('https://example.com'),
		}),
	],
});
