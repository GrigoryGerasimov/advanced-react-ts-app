export interface IWebpackLoader {
    test: RegExp,
    use: string | string[],
    exclude: RegExp
}