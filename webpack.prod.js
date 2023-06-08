// const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const {CleanWebpackPlugin} = require('clean-webpack-plugin')
// const webpack = require('webpack')
//
// module.exports = {
//     mode: 'development',
//     devServer: {
//         historyApiFallback: true,
//         open: true,
//         compress: true,
//         hot: true,
//         port: 8080,
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 use: ['babel-loader'],
//             },
//             {
//                 test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
//                 type: 'asset/resource',
//             },
//             {
//                 test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
//                 type: 'asset/inline',
//             },
//             {
//                 test: /\.(scss|css)$/,
//                 use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
//             },
//         ],
//     },
//     entry: {
//         main: path.resolve(__dirname, './src/index.js'),
//     },
//     output: {
//         path: path.resolve(__dirname, './dist'),
//         publicPath: '/',
//         filename: 'js/[name].[contenthash].bundle.js',
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             title: 'webpack Boilerplate',
//             template: path.resolve(__dirname, './src/template.html'), // template file
//             filename: 'index.html', // output file
//         }),
//         new CleanWebpackPlugin(),
//         new webpack.HotModuleReplacementPlugin(),
//     ],
// }
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    devServer: {
        static: './dist',
        port: 3030,
    },
    stats: {
        children: true,
        modules: false,
    },
    devtool: 'inline-source-map',
    plugins: [new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: 'Prod Mode',
            template: "./src/index.html",
            filename: "index.html"
        }),
    ],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist'),

    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    }
};