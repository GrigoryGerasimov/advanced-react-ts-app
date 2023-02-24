import { type INavbarProps } from "../interfaces/INavbarProps";
import classes from "../styles/Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { getClassNames } from "shared/lib";
import { Link } from "shared/components";
import { ENS } from "shared/config";
import { type FC } from "react";

export const Navbar: FC<INavbarProps> = ({ theme, config, classNames }): JSX.Element | null => {
    const { t } = useTranslation(ENS.NAVBAR);

    return (
        <div className={getClassNames(classes.navbar, {}, classNames)}>
            <div>
                {config
                    .filter(({ linkKey }) => Boolean(linkKey))
                    .map(({ path, linkKey }) => (
                        <Link key={path} to={path} theme={theme}>{linkKey !== undefined && t(linkKey)}</Link>
                    ))}
            </div>
        </div>
    );
};
