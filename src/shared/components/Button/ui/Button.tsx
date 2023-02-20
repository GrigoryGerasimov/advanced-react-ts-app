import { IButtonProps } from "../interfaces/IButtonProps";
import { EButtonMode } from "../types/EButtonMode";
import classes from "../styles/Button.module.scss";
import { getClassNames } from "../../../lib";
import { FC } from "react";

export const Button: FC<IButtonProps> = ({ name, children, containsIcon, classNames, onClick }) => {
    return (
        <button
            className={getClassNames(classes.btn, { [classes[EButtonMode.CLEAN]]: containsIcon }, classNames)}
            onClick={onClick}
        >
            {!name ? children : name}
        </button>
    )
};