import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './ContactForm.css';

const ContactForm = () => {

  return (
    <div>
      <h3 className='contact-header'>Contact Me!</h3>
      <Form action='https://api.web3forms.com/submit' method="POST" className='form col-3'>
      <input type='hidden' name='access_key' value="099dd778-2dab-49cf-b4cc-9784c27b5566" />

        <Form.Group controlId="formName" >
          <Form.Label className='label'>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter your name" className='user-input'required />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label className='label'>Email</Form.Label>
          <Form.Control className='input' type="email" name="email" placeholder="Enter your email address" required />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label className='label'>Message</Form.Label>
          <Form.Control as="textarea" name="message" placeholder="Enter your message" rows={5} required />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ContactForm;  