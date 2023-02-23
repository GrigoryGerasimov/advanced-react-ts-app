import { type ILangHandler } from "../interfaces/ILangHandler";
import classes from "../styles/LangHandler.module.scss";
import { useTranslation } from "react-i18next";
import { langOptions } from "shared/config";
import { Select } from "shared/components";
import { type FC, useState } from "react";

export const LangHandler: FC<ILangHandler> = ({ classNames }): JSX.Element | null => {
    const { i18n } = useTranslation();
    const [currentLng, setCurrentLng] = useState(i18n.language);

    const handleLangSwitch = (value: string): void => {
        void i18n.changeLanguage(value, () => { setCurrentLng(i18n.language); });
    };

    return (
        <div className={classes["select-wrapper"]}>
            <Select options={langOptions} onChange={handleLangSwitch} value={currentLng} classNames={classNames}/>
        </div>
    );
};
