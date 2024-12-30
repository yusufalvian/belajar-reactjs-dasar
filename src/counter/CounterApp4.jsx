import React from 'react';
import { useImmerReducer } from 'use-immer';

const initialState = {
    count: 0
};

const buttonStyle = {
    margin: '0 8px',
    padding: '8px 16px',
    cursor: 'pointer',
};

const incrementButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
};

const decrementButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
};

const resetButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#808080',
    color: 'white',
    border: 'none',
};

const counterReducer = (draft, action) => {
    switch (action.type) {
        case 'INCREMENT':
            draft.count += 1;
            break;
        case 'DECREMENT':
            draft.count -= 1;
            break;
        case 'RESET':
            draft.count = 0;
            break;
        default:
            break;
    }
};

const CounterApp4 = () => {
    const [state, dispatch] = useImmerReducer(counterReducer, initialState);

    return (
        <div>
            <h2>Counter with useImmerReducer</h2>
            <p>Count: {state.count}</p>
            <button style={incrementButtonStyle} onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button style={decrementButtonStyle} onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
            <button style={resetButtonStyle} onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
        </div>
    );
};

export default CounterApp4;