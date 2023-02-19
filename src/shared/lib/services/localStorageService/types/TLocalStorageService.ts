type TLocalStoragePayload = Record<string, any>;

export type TLocalStorageResult = { [key: string]: any };

export type TLocalStorageService = Record<string, (key: string, payload?: TLocalStoragePayload) => any>;