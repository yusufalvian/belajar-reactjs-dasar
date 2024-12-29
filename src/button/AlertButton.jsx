import {useRef} from "react";

// function component "AlertButton" with props "text" and "message"
export default function AlertButton({text, message}) {

    // create a ref variable "counter" with initial value 0
    const counter = useRef(0);

    // function "handleClick" with parameter "e"
    // this function will alert message with counter value
    function handleClick(e){
        console.info(e.target);
        console.log(e)
        alert(`${message} ${counter.current}`);
        counter.current +=1;
    }

    // return button element with onClick event
    return (
        <button onClick={handleClick}>{text}</button>
    )
}
