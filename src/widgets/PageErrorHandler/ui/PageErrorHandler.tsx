import classes from "../styles/PageErrorHandler.module.scss";
import { ErrorWarnIcon } from "shared/assets/ui";
import { useTranslation } from "react-i18next";
import { Button } from "shared/components";

export const PageErrorHandler = (): JSX.Element | null => {
    const { t } = useTranslation();

    const handlePageReload = (): void => {
        window.location.reload();
    };

    return (
        <div className={classes.error}>
            <ErrorWarnIcon classNames={[classes.error__unit]}/>
            <p className={classes.error__unit}>{t("error.message-title")}</p>
            <p className={classes.error__unit}>{t("error.message-body")}</p>
            <Button onClick={handlePageReload} name={t("error.reload")} classNames={[classes.error__unit]}/>
        </div>
    );
};
