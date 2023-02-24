import { type IIconProps } from "../../interfaces/IIconProps";
import classes from "../../styles/Icon.module.scss";
import { getClassNames } from "shared/lib";
import { type FC } from "react";

export const CollapseIcon: FC<IIconProps> = ({ classNames }): JSX.Element | null => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={getClassNames(classes.svgicon, {}, classNames)}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
        </svg>
    );
};
