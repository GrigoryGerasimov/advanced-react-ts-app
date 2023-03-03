import { type ILoaderProps } from "../interfaces/ILoaderProps";
import classes from "../styles/Loader.module.scss";
import { getClassNames } from "shared/lib";
import React, { type FC } from "react";

export const Loader: FC<ILoaderProps> = ({ classNames }): JSX.Element | null => {
    const loader = [1, 2, 3].map(i => (<div key={i} className={classes.loader__item}></div>));

    return (
        <div data-testid="loader" className={getClassNames(classes.loader, {}, classNames)}>
            {loader}
        </div>
    );
};
