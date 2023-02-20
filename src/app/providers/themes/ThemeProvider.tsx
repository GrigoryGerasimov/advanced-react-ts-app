import { ThemeContext, LS_THEME_KEY, ETheme } from "shared/providers/themes";
import { LS_APP_KEY } from "../../lib/constants/LSAppKeys";
import { localStorageService } from "shared/lib";
import { useState, useMemo, FC } from "react";

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