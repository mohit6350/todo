import React, { useState } from "react";
import './Counter.css';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const Increament = () => {
        setCounter(counter + 1);
    };
    
    const Decreament = () => {
        setCounter(counter - 1);
    };

    const Reset = () => {
        setCounter(0);
    };

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={Increament}>Increament</button>
            <button onClick={Decreament}>Decreament</button>
            <button onClick={Reset}>Reset</button>
       </div> 
    );
};

export default Counter;