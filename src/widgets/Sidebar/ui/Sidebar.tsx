import { ISidebarProps } from "../interfaces/ISidebarProps";
import { CollapseIcon, OpenIcon } from "shared/assets/ui";
import { ESidebarMode } from "../types/ESidebarMode";
import classes from "../styles/Sidebar.module.scss";
import { ThemeHandler } from "../../ThemeHandler";
import { LangHandler } from "../../LangHandler";
import { Button } from "shared/components";
import { getClassNames } from "shared/lib";
import { FC, useState } from "react";

export const Sidebar: FC<ISidebarProps> = ({ theme, classNames, onClick }) => {
    const [collapsed, setCollapsed] = useState(true);

    const handleSidebarToggler = () => {
        setCollapsed(prevState => !prevState);
    };

    return (
        <div className={getClassNames(classes.sidebar, {[classes[ESidebarMode.COLLAPSED]]: collapsed}, classNames)}>
            <Button
                onClick={handleSidebarToggler}
                shouldBeClean={true}
                classNames={[classes["sidebar__mode-switcher"]]}
            >
                {collapsed ? <OpenIcon/> : <CollapseIcon/>}
            </Button>
            <section className={getClassNames(classes["sidebar__functional-section"])}>
                <ThemeHandler onClick={onClick} theme={theme}/>
                <LangHandler classNames={[classes["sidebar__btn-divider"]]}/>
            </section>
        </div>
    )
};