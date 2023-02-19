import { TLocalStorageService, TLocalStorageResult } from "./types/TLocalStorageService";

export const localStorageService: TLocalStorageService = {
    create: (key, payload) => {
        localStorage.setItem(key, JSON.stringify(payload));
    },
    read: (key) => {
        return JSON.parse(localStorage.getItem(key)) as TLocalStorageResult;
    },
    delete: (key) => {
        localStorage.removeItem(key);
    },
    check: (key) => {
        return !!localStorage[key];
    }
};