import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

export const definePlugins = (template: string): webpack.WebpackPluginInstance[] => {
    return [
        new HTMLWebpackPlugin({ template }),
        new webpack.ProgressPlugin()
    ]
}