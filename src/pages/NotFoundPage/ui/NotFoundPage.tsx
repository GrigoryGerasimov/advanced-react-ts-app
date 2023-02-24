import classes from "../styles/NotFoundPage.module.scss";
import { useTranslation } from "react-i18next";
import { FailureIcon } from "shared/assets/ui";
import { useNavigate } from "react-router-dom";
import { ERoutes } from "shared/config";
import { Button } from "shared/components";

export const NotFoundPage = (): JSX.Element | null => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleRoutingToMain = (): void => {
        navigate(ERoutes.MAIN);
    };

    return (
        <div className={classes.notfound}>
            <FailureIcon classNames={[classes.notfound__unit]}/>
            <p className={classes.notfound__unit}>{t("404.not-found-title")}</p>
            <p className={classes.notfound__unit}>{t("404.not-found-body")}</p>
            <Button onClick={handleRoutingToMain} name={t("404.back")} classNames={[classes.notfound__unit]}/>
        </div>
    );
};
