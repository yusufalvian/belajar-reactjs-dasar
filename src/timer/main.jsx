import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Timer from "./Timer.jsx";
import Timer3 from "./Timer3.jsx";
import Timer2 from "./Timer2.jsx";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <Timer2 />
        </StrictMode>
    )
