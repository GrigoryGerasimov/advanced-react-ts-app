import classes from "../../../styles/styles.pages/Counter.module.scss";
import { Button } from "../../components/Button/Button";
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
                <Button onClick={increment} title="+ 1"/>
                <Button onClick={decrement} title="- 1"/>
            </div>
        </div>
    )
};

export default Counter;