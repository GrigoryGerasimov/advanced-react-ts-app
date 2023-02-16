import path from "path";

export const definePaths = (paths: string[]): string => {
    return path.resolve(__dirname, "../../", ...paths);
};