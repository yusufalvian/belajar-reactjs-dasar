import {createRoot} from "react-dom/client";
import HelloWorld from "./HelloWorld.jsx";
import {StrictMode} from "react";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <HelloWorld/>
        </StrictMode>
    )
