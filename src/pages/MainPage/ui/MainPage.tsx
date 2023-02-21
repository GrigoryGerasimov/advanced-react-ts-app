import { useTranslation } from "react-i18next";
import { ENS } from "shared/config";

const MainPage = () => {
    const { t } = useTranslation(ENS.MAIN_PAGE);

    return (
        <div>{t("main-page")}</div>
    )
};

export default MainPage;