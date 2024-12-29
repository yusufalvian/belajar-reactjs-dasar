import {createRoot} from "react-dom/client";
import HelloWorld from "./HelloWorld.jsx";
import {StrictMode} from "react";
import Container from "./Container.jsx";
import TodoList from "../todolist/TodoList.jsx";
import Table from "../table/Table.jsx";
import AlertButton from "../button/AlertButton.jsx";
import MyButton from "../button/MyButton.jsx";
import Toolbar from "../button/Toolbar.jsx";
import SearchForm from "../form/SearchForm.jsx";
import SayHelloForm from "../form/SayHelloForm.jsx";
import Counter from "../form/Counter.jsx";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <Container>
                <HelloWorld/>
                <TodoList/>
                <Table/>

                <AlertButton text="Click Me" message="You click me"/>

                {/*  #note. prop can be an anonymous function*/}
                <MyButton text="Smash me" onSmash={() => alert("You smash me")}/>

{/* #note. di parameter event handler, kita bisa berikan parameter berupa event object */}
                <Toolbar onClick={(e) => {
                    // without stopPropagation, the event will bubble up to the parent
                    // so, alert will be shown twice
                    e.stopPropagation();
                    alert("You click toolbar");
                }}/>

                <SearchForm/>

                <SayHelloForm/>

                <Counter/>
                <Counter/>
            </Container>
        </StrictMode>
    )
