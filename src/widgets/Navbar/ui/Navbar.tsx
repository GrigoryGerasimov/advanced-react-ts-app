import { getClassNames } from "shared/lib/helpers/classNames/getClassNames";
import { appRouterConfig } from "app/providers/routes/AppRouter";
import classes from "../styles/Navbar.module.scss";
import { Button } from "shared/components/Button";
import { Link } from "shared/components/Link";
import { FC } from "react";

export const Navbar: FC<{theme: string, onClick: () => void}> = ({ theme, onClick }) => {
    return (
        <div className={getClassNames(classes.navbar, {}, [theme])}>
            <Button onClick={onClick} title={theme}/>
            <div>
               {appRouterConfig.map(({ path, linkTitle }) => (
                    <Link key={path} to={path}>{linkTitle}</Link>
                ))} 
            </div>
        </div>
    )
};