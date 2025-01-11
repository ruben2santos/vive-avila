const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, 'src', 'App.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	mode: 'development',
	devtool: false,
	devServer: {
		static: {
			directory: __dirname
		},
		devMiddleware: {
			writeToDisk: true
		},
		open: true,
		port: 9000
	},
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "index.html")
		})
	],
	module: {
		rules: [
			{
				test: /\.(jsx|js)$/,
				include: path.resolve(__dirname, 'src'),
				exclude: /node_modules/,
				use: [{
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env', {
								"targets": "defaults"
							}],
							'@babel/preset-react'
						]
					}
				}]
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	}
};
