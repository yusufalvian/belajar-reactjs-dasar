import { useRef, useState } from "react";

export default function Timer() {
    const [start, setStart] = useState(null);
    const [now, setNow] = useState(null);
    const timer = useRef(null);

    function handleStart() {
        setStart(Date.now());
        setNow(Date.now());

        // this will clear the interval if it is already running
        // without this, there is a possibility that many interval running at the same time and cause memory leak
        if (timer.current) {
            clearInterval(timer.current);
        }

        // this will re render the component every x milisecond
        // when setInterval is executed, it will return intervalId that is saved in timer.current
        timer.current = setInterval(() => {
            console.log('Interval executing with ID:', timer.current);
            setNow(Date.now());
        }, 10);
    }

    function handleStop() {
        // will stop the interval based on the intervalId that is saved in timer.current
        console.log('Clearing interval with ID:', timer.current);
        clearInterval(timer.current);
    }

    function handleReset() {
        setStart(Date.now());
        setNow(Date.now());
    }

    return (
        <>
            <h1>Timer : {now - start} ms</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}
