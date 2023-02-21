import { ILangHandler } from "../interfaces/ILangHandler";
import { useTranslation } from "react-i18next";
import { getSwitchedLang } from "shared/lib";
import { Button } from "shared/components";
import { FC } from "react";

export const LangHandler: FC<ILangHandler> = ({ classNames }) => {
    const { t, i18n } = useTranslation();

    const handleLangSwitch = () => {
        i18n.changeLanguage(getSwitchedLang(i18n.language));
    };

    return (
        <Button onClick={handleLangSwitch} shouldBeClean={true} classNames={classNames}>
            {t("lang")}
        </Button>
    )
};