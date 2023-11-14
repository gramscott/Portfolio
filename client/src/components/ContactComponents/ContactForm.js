import React, { useEffect, useState } from 'react'

import { Button } from 'react-bootstrap';

const ContactForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const onSubmit = () => {
        e.preventDefault();
        console.log('Data:', name, email, message)
    } 

    


  return (

    <div>
    <h3>Get In Touch!</h3>
    <form onSubmit={onSubmit}>
        <input
        value={name} 
        onChange={(e) => setName(e.target.value)}
        type="text"
         placeholder="Name" />

        <input 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
         placeholder="email" />

        <textarea value={message}
        onChange={(e) => setMessage(e.target.value)}
        type="message" 
        placeholder="message" />
        <Button type="submit">Submit</Button>
    </form>
    </div>
  )
}

export default ContactForm