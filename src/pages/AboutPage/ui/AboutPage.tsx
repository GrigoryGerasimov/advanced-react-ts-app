import { useTranslation } from "react-i18next";
import { ENS } from "shared/config";

const AboutPage = () => {
    const { t } = useTranslation(ENS.ABOUT_PAGE);

    return (
        <div>{t("about-page")}</div>
    )
};

export default AboutPage;