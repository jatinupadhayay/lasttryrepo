import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Message: ${message}, Email: ${email}`);
    // Add your email/message sending logic here
    alert("Thank you for your message! We will get back to you within 48 hours.");
    setMessage(''); // Clear message after submission
    setEmail(''); // Clear email after submission
  };

  return (
    <div className="contact-page">
      <h1>Say hello!</h1>
      <p>Please elaborate your concern below, our support team will endeavour to get back to you within 48 hours.</p>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Your Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea 
          placeholder="Your Message" 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
