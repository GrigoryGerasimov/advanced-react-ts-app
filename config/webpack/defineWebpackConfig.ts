import { definePlugins, defineLoaders, defineResolution, defineDevServer } from "./";
import { IWebpackConfigOptions, IWebpackConfigPaths } from "./interfaces";
import webpack from "webpack";

export const defineWebpackConfig = (paths: IWebpackConfigPaths, options: IWebpackConfigOptions): webpack.Configuration => {
    const { entry, output, template, source } = paths;
    const { mode, port } = options;

    const isDev = mode === "development";

    return {
        mode,
        entry,
        output: {
            filename: "[name].[contenthash:8].js",
            path: output,
            clean: true
        },
        plugins: definePlugins(template, isDev),
        module: {
            rules: defineLoaders(isDev)
        },
        resolve: defineResolution(source),
        devtool: isDev && "inline-source-map",
        devServer: isDev ? defineDevServer(port) : undefined
    }
};