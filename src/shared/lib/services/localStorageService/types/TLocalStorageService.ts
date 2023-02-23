type TLocalStoragePayload = Record<string, any>;

export type TLocalStorageResult = Record<string, any>;

export type TLocalStorageService = Record<string, (key: string, payload?: TLocalStoragePayload) => any>;
