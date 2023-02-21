import { DarkThemeIcon, LightThemeIcon } from "../../../assets/ui";
import { IThemeHandler } from "../lib/interfaces/IThemeHandler";
import { Button } from "../../../components";
import { ETheme } from "../lib/types/ETheme";
import { FC } from "react";

export const ThemeHandler: FC<IThemeHandler> = ({ theme, onClick }) => {
    return (
        <Button onClick={onClick} shouldBeClean={true}>
            {theme === ETheme.DARK ? <DarkThemeIcon/> : <LightThemeIcon/>}
        </Button>
    )
};