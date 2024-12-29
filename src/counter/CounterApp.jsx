import {useState} from "react";
import Counter from "./Counter.jsx";

export default function CounterApp(){
    const [show2, setShow2] = useState(true)

    function handleChange(e){
        setShow2(e.target.checked);
    }

    return (
        <div>

            {show2 ? <Counter name="okefff"/> : <Counter name="eko"/>}

            <input type="checkbox" checked={show2} onChange={handleChange}/> Tampilkan Counter 2
        </div>
    )
}
