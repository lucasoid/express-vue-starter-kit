const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    entry: {
        login: path.resolve('./src/login.js'),
        app: path.resolve('./src/app.js')
    },
    devtool: isDev ? 'inline-source-map' : 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['@babel/preset-env', {
                            "targets": {
                                "browsers": ["last 2 versions", "ie >= 9"]
                            }
                        }]]
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },       
        ]
    },
    output: {
        path: path.resolve('./dist'),
        filename: 'js/[name].[hash].js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash].css'
        }),
        new HtmlWebpackPlugin({
            template: 'src/html/app.html',
            filename: 'app.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            template: 'src/html/login.html',
            filename: 'login.html',
            chunks: ['login']
        }),
        new CopyWebpackPlugin([{from: 'src/assets', to: 'assets'}]),
        new VueLoaderPlugin()
    ],
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            actions: path.resolve(__dirname, 'src/actions'),
            api: path.resolve(__dirname, 'src/api'),
            components: path.resolve(__dirname, 'src/components'),
            constants: path.resolve(__dirname, 'src/constants'),
            scss: path.resolve(__dirname, 'src/scss'),
            store: path.resolve(__dirname, 'src/store'),
            utils: path.resolve(__dirname, 'src/utils')            
        }
    },
    externals: {
        axios: 'axios',
        vue: 'Vue'
    }
};