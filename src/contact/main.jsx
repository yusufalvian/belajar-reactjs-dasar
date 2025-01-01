import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import ContactForm from "./ContactForm.jsx";
import ContactForm2 from "./ContactForm2.jsx";
import ContactForm3 from "./ContactForm3.jsx";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <ContactForm/>
        </StrictMode>
    )
