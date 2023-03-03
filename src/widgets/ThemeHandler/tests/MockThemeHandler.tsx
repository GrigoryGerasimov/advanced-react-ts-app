import { ThemeHandler } from "../ui/ThemeHandler";
import { type FC, useState } from "react";

export const MockThemeHandler: FC = (): JSX.Element | null => {
    const [theme, setTheme] = useState<string>("dark");

    const handleThemeSwitch = (): void => {
        setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark");
    };

    return (
        <ThemeHandler theme={theme} onClick={handleThemeSwitch}/>
    );
};
