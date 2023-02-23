import { useTheme } from "../lib/useTheme";

export const withThemes = (Component: React.ComponentType) => (props: any) => {
    const { theme, themeSwitchHandler } = useTheme();

    return (
        <Component {...props} theme={theme} themeSwitchHandler={themeSwitchHandler}/>
    );
};
