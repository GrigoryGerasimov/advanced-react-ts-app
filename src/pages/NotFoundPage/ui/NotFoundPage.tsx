import classes from "../styles/NotFoundPage.module.scss";
import { useTranslation } from "react-i18next";

export const NotFoundPage = (): JSX.Element | null => {
    const { t } = useTranslation();

    return (
        <div className={classes.notfound}>
            <p className={classes.notfound__unit}>{t("404.not-found-title")}</p>
            <p className={classes.notfound__unit}>{t("404.not-found-body")}</p>
        </div>
    );
};
