import classes from "../styles/Loader.module.scss";

export const Loader = () => {
    const loader = [1, 2, 3].map(i => (<div key={i} className={classes["loader__item"]}></div>));

    return (
        <div className={classes.loader}>{loader}</div>
    )
};