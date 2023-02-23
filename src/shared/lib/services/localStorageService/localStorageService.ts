import { type TLocalStorageService, type TLocalStorageResult } from "./types/TLocalStorageService";

export const localStorageService: TLocalStorageService = {
    create: (key, payload) => {
        localStorage.setItem(key, JSON.stringify(payload));
    },
    read: (key) => {
        const result = localStorage.getItem(key);
        return result !== null ? JSON.parse(result) as TLocalStorageResult : null;
    },
    delete: (key) => {
        localStorage.removeItem(key);
    },
    check: (key) => {
        return Boolean(localStorage[key]);
    }
};
