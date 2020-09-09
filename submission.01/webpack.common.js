const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }]
        }, {
            test: /\.(png|svg|jpg|gif|ttf|eot)$/,
            use: [{
                loader: 'file-loader'
            }]
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
             loader:'url-loader',
             options:{
                limit: 10000,
                mimetype: 'application/font-woff',
                // name: ('fonts/[path][name].[hash:7].[ext]'),
                //name: ('fonts/[name].[hash:7].[ext]'),
             }
        },]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
    ]
};