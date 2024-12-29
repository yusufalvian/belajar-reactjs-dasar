export default function Toolbar({onClick}){
    // without stopPropagation, the onClick event will be triggered twice
    // first from the button, and second from the div
    // so, alert will be shown twice
    return (
        <div onClick={onClick} style={{backgroundColor:"yellow"}}>
            <button onClick={onClick}>First</button>
            <button onClick={onClick}>Second</button>
        </div>
    )
}
