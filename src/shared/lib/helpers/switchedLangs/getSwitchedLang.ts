import { ELang } from "./types/ELang";

export const getSwitchedLang = (lang: string): string => {
    switch (lang) {
        case ELang.ENGLISH: return ELang.RUSSIAN;
        case ELang.RUSSIAN: return ELang.GERMAN;
        case ELang.GERMAN: return ELang.CZECH;
        case ELang.CZECH: return ELang.ENGLISH;
        default: return ELang.ENGLISH;
    }
};
