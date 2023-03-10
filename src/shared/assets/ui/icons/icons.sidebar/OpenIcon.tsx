import { type IIconProps } from "../../interfaces/IIconProps";
import classes from "../../styles/Icon.module.scss";
import { getClassNames } from "shared/lib";
import { type FC } from "react";

export const OpenIcon: FC<IIconProps> = ({ classNames }): JSX.Element | null => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={getClassNames(classes.svgicon, {}, classNames)}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
        </svg>
    );
};
