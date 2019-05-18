const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin")
module.exports = {
    mode:"production",
    entry: './src/main.js',
    output: {
        publicPath: 'src',  //html插件为src添加的根目录
        path:__dirname + '/dist/src', //生成js目录
        filename: '[name]-[hash].js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          filename: __dirname +'/dist/index.html', //默认为dist目录
          template: 'index.html',
          inject: true
        }),
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
