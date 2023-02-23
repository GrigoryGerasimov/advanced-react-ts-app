export interface IWebpackLoader {
    test: RegExp
    use: Array<Record<string, unknown> | string>
    exclude: RegExp
}
