/**
 * Created by ivan on 03.06.18.
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.jsx',
    output: {
        filename: 'bundle.[hash].js',
        publicPath: '/'
    },
    devtool: 'inline-source-map',
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
                    {
                        loader: 'style-loader'
                    }
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: 'public/favicon-40.png'
        })
    ],
    devServer: {
        host: '0.0.0.0',
        port: 3000,
        historyApiFallback: true,
        open: true,
        hot: true
    }
};