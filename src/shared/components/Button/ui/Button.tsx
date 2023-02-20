import { getClassNames } from "shared/lib/helpers/classNames/getClassNames";
import classes from "../styles/Button.module.scss";
import { FC } from "react";

export const Button: FC<{title: string, onClick: () => void}> = ({ title, onClick }) => {
    return (
        <button className={getClassNames(classes.btn)} onClick={onClick}>{title}</button>
    )
};