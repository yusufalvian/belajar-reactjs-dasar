import React, { useState } from 'react';

export default function CounterApp3() {
    // const counter = useRef(0);
    const [counter, setCounter] = useState(0);

    function handleClick() {
        setCounter(prevCounter => prevCounter + 1);
    }

    return (
        <div>
            <h1>Counter : {counter}</h1>
            <button onClick={handleClick}>Increment</button>
        </div>
    )

}