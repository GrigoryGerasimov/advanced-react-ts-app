export default {
    clearMocks: true,
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: [
        "<rootDir>config/jest/setupTests.ts"
    ],
    moduleNameMapper: {
        "\\.(sass|scss|css)$": "identity-obj-proxy"
    },
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
    modulePaths: [
        "<rootDir>src"
    ],
    rootDir: "../../",
    testMatch: [
        "<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)"
    ],
    timers: "fake",
    testTimeout: 30000
};
