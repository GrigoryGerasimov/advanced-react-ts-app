import { INavbarProps } from "../interfaces/INavbarProps";
import classes from "../styles/Navbar.module.scss";
import { getClassNames } from "shared/lib";
import { Link } from "shared/components";
import { FC } from "react";

export const Navbar: FC<INavbarProps> = ({ theme, config, classNames }) => {
    return (
        <div className={getClassNames(classes.navbar, {}, classNames)}>
            <div>
               {config.map(({ path, linkTitle }) => (
                    <Link key={path} to={path} theme={theme}>{linkTitle}</Link>
                ))} 
            </div>
        </div>
    )
};