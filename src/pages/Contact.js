import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us.</p>
        <ul>
          <li>
            <span className="icon">&#128100;</span>
            <p>Craftsvilla Inc.</p>
          </li>
          <li>
            <span className="icon">&#9990;</span>
            <p>9363134296</p>
          </li>
          <li>
            <span className="icon">&#9993;</span>
            <p>support@craftsvilla.com</p>
          </li>
        </ul>
      </div>

      <div className="contact-form">
        <h2>Send Us a Message</h2>
        {submitted ? (
          <div className="success-message">
            <p>Thank you for reaching out! We will get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
