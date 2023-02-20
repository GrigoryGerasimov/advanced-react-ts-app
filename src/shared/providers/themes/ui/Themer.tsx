import { DarkThemeIcon, LightThemeIcon } from "../../../assets/ui";
import { IThemer } from "../lib/interfaces/IThemer";
import { Button } from "../../../components";
import { ETheme } from "../lib/types/ETheme";
import { FC } from "react";

export const Themer: FC<IThemer> = ({ theme, onClick }) => {
    return (
        <Button onClick={onClick} containsIcon={true}>
            {theme === ETheme.DARK ? <DarkThemeIcon/> : <LightThemeIcon/>}
        </Button>
    )
};