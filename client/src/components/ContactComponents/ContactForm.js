import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './ContactForm.css';
import ThankYou from './ThankYou';

const ContactForm = () => {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '099dd778-2dab-49cf-b4cc-9784c27b5566',
          redirect: '',
          subject: 'New Submission from Portfolio Website',
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {

        console.error('form submission failed.');
      }
    } catch (error) {
      console.error('form submission failed.', error);
    }
  };

  return (
    <div className='container col-md-4'>
      {submitted ? (
        <ThankYou /> 
      ) : (
        <div>
      <h3 className='contact-header mb-3 mt-3 '>Contact Me!</h3>

      <Form onSubmit={handleSubmit} className='form rounded shadow p-4 mb-5'>
        {/* <input type='hidden' name='access_key' value="099dd778-2dab-49cf-b4cc-9784c27b5566" />
        <input type='hidden' name='redirect' value='' />
        <input type='hidden' name='subject' value='New Submission from Portfolio Website' /> */}


        <ul className='contact-list'>
          <Form.Group controlId="formName" className='mb-3'>
            <Form.Label className='label'>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter your name" className='user-input' required />
          </Form.Group>

          <Form.Group controlId="formEmail" className='mb-3'>
            <Form.Label className='label'>Email</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter your email address" required />
          </Form.Group>

          <Form.Group controlId="formSubject" className='mb-3'>
            <Form.Label className='label'>Subject</Form.Label>
            <Form.Control type="text" name="subject" placeholder="Enter your subject" required />
          </Form.Group>

          <Form.Group controlId="formMessage" className='mb-3'>
            <Form.Label className='label'>Message</Form.Label>
            <Form.Control as="textarea" name="message" placeholder="Enter your message" rows={5} required />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </ul>
      </Form>
      </div>
      )}
    </div>
  );
}

export default ContactForm;
