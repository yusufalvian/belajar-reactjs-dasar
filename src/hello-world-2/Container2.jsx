import React from 'react';

const Container2 = ({ children }) => {
    return (
        <div>
            <header>
                <h1>Header</h1>
            </header>
            {children}
            <footer>
                <p>Footer</p>
            </footer>
        </div>
    );
};

export default Container2;