import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

export const definePlugins = (template: string, isDev: boolean): webpack.WebpackPluginInstance[] => {
    return [
        new HTMLWebpackPlugin({ template }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash:8].css",
            chunkFilename: "chunk-[name].[contenthash:8].css"
        }),
        new webpack.ProgressPlugin(),
        new webpack.DefinePlugin({
            __IS_DEV_MODE__: JSON.stringify(isDev)
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin()
    ]
}