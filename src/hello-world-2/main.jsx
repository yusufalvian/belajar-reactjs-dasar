import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Container2 from './Container2.jsx';
import ChildrenContainer from './ChildrenContainer.jsx';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <StrictMode>
        <Container2>
            <ChildrenContainer />
        </Container2>
    </StrictMode>
);