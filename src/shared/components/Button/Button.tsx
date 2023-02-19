import classes from "../styles/styles.components/Button.module.scss";
import { FC } from "react";

export const Button: FC<{title: string, onClick: () => void}> = ({ title, onClick }) => {
    return (
        <button className={classes.btn} onClick={onClick}>{title}</button>
    )
};