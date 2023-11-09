import React, { useState } from 'react'

const ContactForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (event) => {
        setFormState({
            ...formState,
            [event.target.id]: event.target.value
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formState)
    };


  return (

    <div>
    <h3>Contact Me</h3>
    <form onSubmit ={handleSubmit}>
        <div className="form-group">
            <label for="name">Name</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your Name"/>
        </div>
        <div className="form-group">
            <label for="email">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Email"/>
        </div>

        <div className="form-group">
            <label for="message">Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Your Message...'></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
  )
}

export default ContactForm