export default function HelloWorld(){
    const props = {
        text: "Hello World from Spread Syntax"
    }
    return (
        <div>
            <HeaderHelloWorld {...props}/>
            <ParagraphHelloWorld/>
        </div>
    )
}

function HeaderHelloWorld({text = "Ups, lupa kasi teks"}){
    return (
        <h1 style={{
            color: "red",
            backgroundColor: "aqua"
        }}>{text.toUpperCase()}</h1>
    )
}

function ParagraphHelloWorld(){
    const text = "Selamat Belajar ReactJS dari Programmer Zaman Now";
    const style = {
        color: "blue",
        backgroundColor: "yellow"
    };
    return (
        <p style={style}>{text.toLowerCase()}</p>
    )
}
