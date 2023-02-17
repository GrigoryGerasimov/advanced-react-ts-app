import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";

export const definePlugins = (template: string): webpack.WebpackPluginInstance[] => {
    return [
        new HTMLWebpackPlugin({ template }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash:8].css",
            chunkFilename: "chunk-[name].[contenthash:8].css"
        }),
        new webpack.ProgressPlugin()
    ]
}