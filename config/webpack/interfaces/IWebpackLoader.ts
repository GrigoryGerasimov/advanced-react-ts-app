export interface IWebpackLoader {
    test: RegExp,
    use: string,
    exclude: RegExp
}