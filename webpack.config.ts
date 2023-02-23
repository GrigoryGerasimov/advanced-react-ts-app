import { type IWebpackConfigOptions, type IWebpackConfigPaths, type IEnvProps } from "./config/webpack/interfaces";
import { defineWebpackConfig, definePaths } from "./config/webpack";
import { type Configuration } from "webpack";

export default (env: IEnvProps): Configuration => {
    const configPaths: IWebpackConfigPaths = {
        entry: definePaths(["src", "index.tsx"]),
        output: definePaths(["dist"]),
        template: definePaths(["public", "index.html"]),
        source: definePaths(["src"])
    };

    const configOptions: IWebpackConfigOptions = {
        mode: env.mode ?? "development",
        port: env.port ?? 5000
    };

    return defineWebpackConfig(configPaths, configOptions);
};
