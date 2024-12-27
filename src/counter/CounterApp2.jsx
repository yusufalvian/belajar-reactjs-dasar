import React, { useRef } from 'react';

export default function CounterApp2() {
    const counter = useRef(0);

    function handleClick() {
        counter.current++;
        console.log(counter.current);
        alert(`Counter : ${counter.current}`);
    }

    return (
        <div>
            <h1>Counter : {counter.current}</h1>
            <button onClick={handleClick}>Increment</button>
        </div>
    )

}