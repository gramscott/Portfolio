import React from 'react'

import { Button } from 'react-bootstrap';

const ContactForm = () => {


  return (

    <div>
    <h3>Get In Touch!</h3>
    <form action='https://api.web3forms.com/submit' method="POST">
    <input type='hidden' name='access_key' value="099dd778-2dab-49cf-b4cc-9784c27b5566" />
        <input
        type="text"
        name='name'
         placeholder="Name" 
         required/>

        <input 
        name='email'
        type="email"
         placeholder="email" 
         required
         />

        <textarea 
        name="message" 
        type="message"
        placeholder="message"
        required
         />
        <Button type="submit">Submit</Button>
    </form>
    </div>
  )
}

export default ContactForm