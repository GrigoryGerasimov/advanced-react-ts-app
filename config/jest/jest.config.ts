export default {
    clearMocks: true,
    testEnvironment: "jsdom",
    coveragePathIgnorePatterns: [
        "\\\\node_modules\\\\"
    ],
    moduleFileExtensions: [
        "js",
        "jsx",
        "ts",
        "tsx",
        "json"
    ],
    moduleDirectories: [
        "node_modules"
    ],
    rootDir: "../../",
    testMatch: [
        "<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)"
    ],
    timers: "fake"
};
