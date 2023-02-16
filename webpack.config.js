const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        filename: "[name].[contenthash:8].js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html")
        }),
        new webpack.ProgressPlugin()
    ]
}