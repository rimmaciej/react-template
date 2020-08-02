// General webpack config, both dev and dist modes build on it
'use strict';

const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
	// Specify entry files
	entry: {
		main: './src/index.jsx',
	},

	// Specify output directory (./dist) and bundle name format
	output: {
		filename: 'js/[name].[hash].js',
		path: path.resolve(__dirname, '../dist'),
	},

	module: {
		rules: [
			// Compile .js and .jsx files with babel
			{
				test: /\.(js|jsx)$/,
				resolve: { extensions: ['.js', '.jsx'] },
				exclude: /node_modules/,
				use: 'babel-loader',
			},
		],
	},

	plugins: [
		// Inject bundle links into the template html and copy to dist directory
		// You can specify favicon link here
		new HtmlPlugin({
			template: path.resolve(__dirname, '../static/index.html'),
			filename: path.resolve(__dirname, '../dist/index.html'),
			// favicon: '/assets/icons/favicon.png'
		}),

		// Copy assets and manifest to dist directory
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, '../static/assets'),
					to: path.resolve(__dirname, '../dist/assets'),
					toType: 'dir',
				},
				{
					from: path.resolve(__dirname, '../static/manifest.json'),
					to: path.resolve(__dirname, '../dist/manifest.json'),
					toType: 'file',
				},
			],
		}),
	],
};
