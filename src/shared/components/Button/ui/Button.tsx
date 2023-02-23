import { type IButtonProps } from "../interfaces/IButtonProps";
import { EButtonMode } from "../types/EButtonMode";
import classes from "../styles/Button.module.scss";
import { getClassNames } from "../../../lib";
import { type FC } from "react";

export const Button: FC<IButtonProps> = ({ name, children, shouldBeClean = false, classNames, onClick }) => {
    return (
        <button
            className={getClassNames(classes.btn, { [classes[EButtonMode.CLEAN]]: shouldBeClean }, classNames)}
            onClick={onClick}
        >
            {name === undefined ? children : name}
        </button>
    );
};
