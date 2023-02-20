import { getClassNames } from "shared/lib/helpers/classNames/getClassNames";
import { NavLink, NavLinkProps } from "react-router-dom";
import classes from "../styles/Link.module.scss";
import { FC } from "react";

interface AppLinkProps extends NavLinkProps {
    theme?: string
}

export const Link: FC<AppLinkProps> = (props) => {
    const { to, children } = props;

    return (
        <NavLink to={to} className={getClassNames(classes.applink)}>{children}</NavLink>
    )
};