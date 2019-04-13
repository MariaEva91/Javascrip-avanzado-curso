let HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports ={
    //dos configuraciones posibles: desarrolo o produccion
    mode: "development",
    plugins :[
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
}