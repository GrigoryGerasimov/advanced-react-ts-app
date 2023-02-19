import { localStorageService } from "../../../shared/services/localStorageService/localStorageService";
import { LS_THEME_KEY } from "../lib/constants/LSThemeKey";
import React, { useState, useMemo, FC } from "react";
import { ThemeContext } from "../lib/useTheme";
import { ETheme } from "../lib/types/ETheme";
import { LS_APP_KEY } from "../../LSAppKeys";

const initialState = localStorageService.read(LS_APP_KEY)?.[LS_THEME_KEY] as ETheme ?? ETheme.LIGHT;

export const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<ETheme>(initialState);

    const themeSwitchHandler = (): void => {
        setTheme((prevTheme: string) => {
            const switchedTheme = prevTheme === ETheme.DARK ? ETheme.LIGHT : ETheme.DARK;
            localStorageService.create(LS_APP_KEY, {[LS_THEME_KEY]: switchedTheme});
            return switchedTheme;
        });
    };

    const exportValue = useMemo(() => ({ theme, themeSwitchHandler }), [theme]);

    return (
        <ThemeContext.Provider value={exportValue}>
            {children}
        </ThemeContext.Provider>
    )
}