import { Configuration as DevServerConfiguration } from "webpack-dev-server";

export const defineDevServer = (port: number): DevServerConfiguration => {
    return {
        port,
        open: true,
        hot: true
    }
};