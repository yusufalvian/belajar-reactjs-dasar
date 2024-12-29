import "./HelloWorld.css";

// function component HelloWorld
export default function HelloWorld(){

    // props object to saved data that what will be passed to HeaderHelloWorld component
    const props = {
        text: "Hello World from Spread Syntax 2"
    }

    return (
        <div>
            <HeaderHelloWorld {...props}/>
            <ParagraphHelloWorld/>
        </div>
    )
}

// we can set default value for props.text
function HeaderHelloWorld({text = "Ups, lupa kasi teks"}){
    return (
        <h1 className="title">{text.toUpperCase()}</h1>
    )
}

function ParagraphHelloWorld(){
    const text = "Selamat Belajar ReactJS dari Programmer Zaman Now";
    return (
        <p className="content">{text.toLowerCase()}</p>
    )
}
