import { ILinkProps } from "../interfaces/ILinkProps";
import { ELinkTheme } from "../types/ELinkTheme";
import classes from "../styles/Link.module.scss";
import { getClassNames } from "../../../lib";
import { ETheme } from "../../../providers";
import { NavLink } from "react-router-dom";
import { FC } from "react";

export const Link: FC<ILinkProps> = ({ to, theme, children }) => {
    return (
        <NavLink to={to} className={getClassNames(classes.applink, {}, [theme === ETheme.DARK ? classes[ELinkTheme.PRIMARY] : classes[ELinkTheme.SECONDARY]])}>
            {children}
        </NavLink>
    )
};