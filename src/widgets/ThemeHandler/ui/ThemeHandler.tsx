import { DarkThemeIcon, LightThemeIcon } from "shared/assets/ui";
import { IThemeHandler } from "../interfaces/IThemeHandler";
import { Button } from "shared/components";
import { ETheme } from "shared/providers";
import { FC } from "react";

export const ThemeHandler: FC<IThemeHandler> = ({ theme, onClick }) => {
    return (
        <Button onClick={onClick} shouldBeClean={true}>
            {theme === ETheme.DARK ? <DarkThemeIcon/> : <LightThemeIcon/>}
        </Button>
    )
};