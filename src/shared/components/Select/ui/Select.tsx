import { type ISelectProps } from "../interfaces/ISelectProps";
import classes from "../styles/Select.module.scss";
import { getClassNames } from "shared/lib";
import { type FC } from "react";

export const Select: FC<ISelectProps> = ({ options, onChange, value, classNames }) => {
    const handleChange = ({ target }: any): void => {
        onChange(target.value);
    };

    return (
        <select onChange={handleChange} value={value} className={getClassNames(classes.select, {}, classNames)}>
            {options.map(({ lang, title }) => (
                <option
                    key={lang}
                    value={lang}
                    className={getClassNames(classes.option, {}, classNames)}
                >
                    {title}
                </option>
            ))}
        </select>
    );
};
