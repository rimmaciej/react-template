'use strict';
const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		main: './src/index.jsx'
	},

	output: {
		filename: 'js/[name].[hash].js',
		path: path.resolve(__dirname, '../dist')
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				resolve: { extensions: ['.js', '.jsx'] },
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.html$/,
				use: 'html-loader'
			},
			{
				test: /\.(ttf|eot|woff|woff2)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: 'static/fonts/[name].[ext]'
					}
				}
			}
		]
	},

	plugins: [
		new HtmlPlugin({
			filename: path.resolve(__dirname, '../dist/index.html'),
			template: path.resolve(__dirname, '../static/index.html')
			// favicon: '/assets/icons/favicon.png'
		}),
		new CopyPlugin([
			{
				from: path.resolve(__dirname, '../static/assets'),
				to: path.resolve(__dirname, '../dist/assets'),
				toType: 'dir'
			}
			// {
			// 	from: path.resolve(__dirname, '../static/manifest.json'),
			// 	to: path.resolve(__dirname, '../dist/manifest.json'),
			// 	toType: 'file'
			// }
		])
	]
};
