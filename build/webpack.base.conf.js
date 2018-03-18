var path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack') // +

module.exports = {
    entry: {
        main: './src/main.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'), // 告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要。
        port: 9000,
        hot: true // +
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'output Management'
        }),
        new CleanWebpackPlugin(['dist'],  {
            root: path.resolve('')
        }),
        new webpack.NamedModulesPlugin(), // +
        new webpack.HotModuleReplacementPlugin() // +
    ],
    module: {
      rules: [
            {
              test: /\.css$/,
              use: [
                'style-loader',
                'css-loader'
              ]
        }
      ]
    }
}