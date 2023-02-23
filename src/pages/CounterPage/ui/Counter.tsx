import classes from "../styles/Counter.module.scss";
import { Button } from "shared/components/Button";
import { useState } from "react";

const Counter = (): JSX.Element | null => {
    const [counter, setCounter] = useState(0);

    const increment = (): void => {
        setCounter(prevState => prevState + 1);
    };

    const decrement = (): void => {
        setCounter(prevState => prevState - 1);
    };

    return (
        <div className={classes.counter}>
            <div>
                <output className={classes.counter__output}>{counter}</output>
            </div>
            <div>
                <Button onClick={increment} name="+ 1"/>
                <Button onClick={decrement} name="- 1"/>
            </div>
        </div>
    );
};

export default Counter;
