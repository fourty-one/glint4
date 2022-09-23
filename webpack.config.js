const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, 'src/js/main.js'),
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              'sass-loader',
            ],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
            generator: {
              filename: 'static/images/[name].[contenthash][ext]'
            }
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
            generator: {
              filename: 'static/fonts/[name].[contenthash][ext]'
            }
          },
          {
            test: /\.html$/i,
            loader: "html-loader",
          },
        ],
    },
}
