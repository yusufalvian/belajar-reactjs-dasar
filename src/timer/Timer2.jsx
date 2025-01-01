import { useRef, useState } from "react";

export default function Timer() {
    const [start, setStart] = useState(Date.now());
    const [now, setNow] = useState(Date.now());
    const timer = useRef(null);

    function handleStart() {
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

    // will stop the interval based on the intervalId that is saved in timer.current
    function handleStop() {
        console.log('Clearing interval with ID:', timer.current);
        clearInterval(timer.current);
    }

    // set start and now to Date.now()
    // this will reset the timer
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
