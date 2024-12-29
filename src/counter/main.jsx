import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import CounterApp from "./CounterApp.jsx";
import CounterApp2 from "./CounterApp2.jsx";
import CounterApp3 from "./CounterApp3.jsx";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <CounterApp />
        </StrictMode>
    )
