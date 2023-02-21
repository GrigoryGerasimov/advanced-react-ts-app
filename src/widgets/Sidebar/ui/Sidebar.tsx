import { ISidebarProps } from "../interfaces/ISidebarProps";
import { ThemeHandler } from "shared/providers/themes";
import { ESidebarMode } from "../types/ESidebarMode";
import classes from "../styles/Sidebar.module.scss";
import { Button } from "shared/components";
import { getClassNames } from "shared/lib";
import { FC, useState } from "react";

export const Sidebar: FC<ISidebarProps> = ({ theme, classNames, onClick }) => {
    const [collapsed, setCollapsed] = useState(true);

    const handleSidebarToggler = () => {
        setCollapsed(prevState => !prevState);
    };

    const togglerName = "Toggle";

    return (
        <div className={getClassNames(classes.sidebar, {[classes[ESidebarMode.COLLAPSED]]: collapsed}, classNames)}>
            <Button
                name={collapsed ? togglerName : togglerName.split("").reverse().join("")}
                onClick={handleSidebarToggler}
                shouldBeClean={true}
                classNames={[classes["sidebar__mode-switcher"]]}
            />
            <section className={getClassNames(classes["sidebar__functional-section"])}>
                <ThemeHandler onClick={onClick} theme={theme}/>
            </section>
        </div>
    )
};