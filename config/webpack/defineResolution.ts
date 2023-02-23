import type webpack from "webpack";

export const defineResolution = (sourcePath: string): webpack.ResolveOptions => {
    return {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        preferAbsolute: true,
        modules: [sourcePath, "node_modules"],
        alias: {},
        mainFiles: ["index"]
    };
};
