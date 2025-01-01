import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Window from "./Window.jsx";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <Window />
        </StrictMode>
    )
