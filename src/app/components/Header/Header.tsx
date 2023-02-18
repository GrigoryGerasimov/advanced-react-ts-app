import classes from "../../../styles/styles.components/Header.module.scss";
import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <div className={classes.header}>
            <NavLink to="/" className={classes["header__link"]}>Main Page</NavLink>
            <NavLink to="/about" className={classes["header__link"]}>About Page</NavLink>
            <NavLink to="/counter" className={classes["header__link"]}>Counter</NavLink>
        </div>
    )
};