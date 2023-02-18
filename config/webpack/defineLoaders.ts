import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { IWebpackLoader } from "./interfaces";
import webpack from "webpack";

export const defineLoaders = (isDev: boolean): webpack.RuleSetRule[] => {
    const tsLoader: IWebpackLoader = {
        test: /\.(ts|tsx)$/i,
        use: ["ts-loader"],
        exclude: /node_modules/
    }

    const stylesLoader: IWebpackLoader = {
        test: /\.s(a|c)ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resourcePath: string) => !!resourcePath.includes(".module.scss"),
                        localIdentName: isDev ? "[name]_[path]__[local]::[hash:base64:5]" : "[name]_[path]__[local]__[hash:base64:8]"
                    }
                }
            },
            "sass-loader"],
        exclude: /node_modules/
    }

    return [
        tsLoader,
        stylesLoader
    ]
};