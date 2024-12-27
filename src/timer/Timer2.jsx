import { useRef, useState } from "react";

export default function Timer() {
    const [start, setStart] = useState(null);
    const [now, setNow] = useState(null);
    const timer = useRef(null);

    function handleStart() {
        setStart(1);
        setNow(1);

        timer.current = 10;
    }

    function handleStop() {
        clearInterval(timer.current);
    }

    return (
        <>
            <h1>Timer : {now - start} ms</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </>
    )
}
