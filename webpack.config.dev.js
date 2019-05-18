const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin")
module.exports = {
    mode: "development",
    entry: './src/main.js',
    output: {
        publicPath: '/dist',  //此处为hmr监视目录，生成的链接并不生效
        path:__dirname + '/dist', //生成js目录
        filename: 'development.js'
    },
    devServer: {
        hot: true,
        contentBase: './dist'  //dev服务器伺服目录,html所在位置
    },
    plugins: [
        new HtmlWebpackPlugin({
          // filename: __dirname +'/dist/index.html', //默认为dist目录
          template: 'index.html',
          inject: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                }
            }
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    }
};
