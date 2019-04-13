let HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
	/*"development" ó "production"*/
	mode : "production",
	module : {
		rules : [
			{
				test : /\.js$/,
				exclude : /node_modules/,
				loader : "babel-loader"
			}
		]
	},
	plugins : [
		new HtmlWebpackPlugin({
			template : "./src/index.html"
		})
	]
}