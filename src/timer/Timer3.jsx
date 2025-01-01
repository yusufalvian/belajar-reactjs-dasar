import React, { useState, useRef } from 'react';

function Timer3() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    const startTimer = () => {
        if (!isRunning) {
            setIsRunning(true);
            intervalRef.current = setInterval(() => {
                setTime(prevTime => prevTime + 10);
            }, 10);
        }
    };

    const stopTimer = () => {
        if (isRunning) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
        }
    };

    const resetTimer = () => {
        clearInterval(intervalRef.current);
        setIsRunning(false);
        setTime(0);
    };

    return (
        <div>
            <h2>Timer</h2>
            <div>
                <span>{Math.floor(time / 1000)}.</span>
                <span>{(time % 1000).toString().padStart(3, '0')} seconds</span>
            </div>
            <div>
                <button onClick={startTimer}>Start</button>
                <button onClick={stopTimer}>Stop</button>
                <button onClick={resetTimer}>Reset</button>
            </div>
        </div>
    );
}

export default Timer3;