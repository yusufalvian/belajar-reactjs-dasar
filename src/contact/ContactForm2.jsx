
import React, { useState } from 'react';

const data = {
    name: '',
    message:''
}

const ContactForm = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    return (
        <>
        <form>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleNameChange}
                />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <input
                    type="text"
                    id="message"
                    value={message}
                    onChange={handleMessageChange}
                />
            </div>
        </form>
        <div>
            <h1>{name}</h1>
            <h1>{message}</h1>
        </div>
        </>
        
    );
};

export default ContactForm;