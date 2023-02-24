import classes from "../styles/PageLoadHandler.module.scss";
import { Loader } from "shared/components";

export const PageLoadHandler = (): JSX.Element | null => {
    return (
        <div className={classes.pageload}>
            <Loader/>
        </div>
    );
};
