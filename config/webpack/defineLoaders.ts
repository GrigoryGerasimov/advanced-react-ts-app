import { IWebpackLoader } from "./interfaces";
import webpack from "webpack";

export const defineLoaders = (): webpack.RuleSetRule[] => {
    const tsLoader: IWebpackLoader = {
        test: /\.tsx?/gi,
        use: "ts-loader",
        exclude: /node_modules/
    }

    const stylesLoader: IWebpackLoader = {
        test: /\.s(a|c)ss$/gi,
        use: ["style-loader", "css-loader", "sass-loader"],
        exclude: /node_modules/
    }

    return [
        tsLoader,
        stylesLoader
    ]
};