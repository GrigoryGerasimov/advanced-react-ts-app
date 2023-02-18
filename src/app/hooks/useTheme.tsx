import { createContext, useContext, useState, useMemo, FC } from "react";
import { LS_THEME_KEY } from "../../themes/constants/LSThemeKey";
import { ITheme } from "../../themes/interfaces/ITheme";
import { ETheme } from "../../themes/types/ETheme";

const initialState = localStorage.getItem(LS_THEME_KEY) as ETheme ?? ETheme.LIGHT;

const ThemeContext = createContext<ITheme>({});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<ETheme>(initialState);

    const themeSwitchHandler = (): void => {
        setTheme(prevTheme => {
            const switchedTheme = prevTheme === ETheme.DARK ? ETheme.LIGHT : ETheme.DARK;
            localStorage.setItem(LS_THEME_KEY, switchedTheme);
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