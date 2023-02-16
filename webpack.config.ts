import { IWebpackConfigOptions, IWebpackConfigPaths, IEnvProps } from "./config/webpack/interfaces";
import { defineWebpackConfig, definePaths } from "./config/webpack";

export default (env: IEnvProps) => {
    const configPaths: IWebpackConfigPaths = {
        entry: definePaths(["src", "index.tsx"]),
        output: definePaths(["dist"]),
        template: definePaths(["public", "index.html"])
    };
    
    const configOptions: IWebpackConfigOptions = {
        mode: env.mode ?? "development",
        port: env.port ?? 5000
    };

    return defineWebpackConfig(configPaths, configOptions);
};

