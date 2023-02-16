import { useState } from "react";
import "./Counter.scss";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(prevState => prevState + 1);
    };

    const decrement = () => {
        setCounter(prevState => prevState - 1);
    }

    return (
        <div className="counter">
            <div>
                <output className="counter__output">{counter}</output>
            </div>
            <div>
                <button className="counter__btn" onClick={increment}>+ 1</button>
                <button className="counter__btn" onClick={decrement}>- 1</button>
            </div>
        </div>
    )
};

export default Counter;