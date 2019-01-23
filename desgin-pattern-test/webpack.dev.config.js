const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: './release/bundle.js'
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader'

        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'  //模板
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, './release'), //根目录
        open: true,
        port: 8999
    }
}