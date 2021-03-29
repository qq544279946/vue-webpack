const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const config = {
    entry: path.resolve(__dirname, './src/main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'demo.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: 'url-loader?limit=8192'
            },
            {
                test: /\.(eot|svg|woff|woff2|wtf)$/,
                use: 'url-loader'
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new VueLoaderPlugin()
    ],
    devServer: {
        
    }
}

module.exports = config;