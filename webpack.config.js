/**
 * Created by turashov on 14.08.2018.
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    mode: isDev ? 'development' : 'production',
    entry: './src/index.jsx',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'static'),
        publicPath: '/'
    },
    devtool: isDev ? 'source-map' : false,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                loader: 'file-loader'
            }
        ]
    },
    devServer: {
        host: '0.0.0.0',
        port: 3000,
        historyApiFallback: true,
        open: true,
        hot: true
    },
    optimization: {
        minimizer: isDev ? [] : [
            new TerserPlugin()
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: 'public/favicon-40.png'
        }),
        new webpack.ContextReplacementPlugin(
            /moment[/\\]locale$/,
            /en/
        )
    ].concat(isDev ? [] : [
        new CompressionPlugin()
    ])
};