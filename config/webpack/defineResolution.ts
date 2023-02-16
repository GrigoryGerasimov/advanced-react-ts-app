import webpack from "webpack";

export const defineResolution = (): webpack.ResolveOptions => {
    return {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    }
};