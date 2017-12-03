const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		app: "./src/app.js"
	},
	module: {
		rules: [
			{
				test: /\.(scss|css)$/,
				use: ["style-loader", "css-loader", "sass-loader"]
			},
			{
				test: /\.js?$/,
				loader: "babel-loader",
				exclude: /node_modules/
			},
			// Fonts
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: ["file-loader"]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(["dist"]),
		new HtmlWebpackPlugin({
			title: "RPG Character Hub",
			template: "./src/index.html"
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "/"
	}
};
