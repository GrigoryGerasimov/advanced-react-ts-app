/* eslint-disable i18next/no-literal-string */
import { useTranslation } from "react-i18next";
import { Button } from "shared/components";
import { ENS } from "shared/config";
import { useState, useEffect } from "react";

const MainPage = (): JSX.Element | null => {
    const { t } = useTranslation(ENS.MAIN_PAGE);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (error) {
            throw new Error("test error");
        }
    }, [error]);

    const handleThrowError = (): void => {
        setError(true);
    };

    return (
        <div>
            <div>{t("main-page")}</div>
            <Button onClick={handleThrowError} name="throw"/>
        </div>
    );
};

export default MainPage;
