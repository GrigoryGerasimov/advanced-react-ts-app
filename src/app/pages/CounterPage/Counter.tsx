import classes from "./Counter.module.scss";
import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(prevState => prevState + 1);
    };

    const decrement = () => {
        setCounter(prevState => prevState - 1);
    }

    return (
        <div className={classes.counter}>
            <div>
                <output className={classes["counter__output"]}>{counter}</output>
            </div>
            <div>
                <button className={classes["counter__btn"]} onClick={increment}>+ 1</button>
                <button className={classes["counter__btn"]} onClick={decrement}>- 1</button>
            </div>
        </div>
    )
};

export default Counter;