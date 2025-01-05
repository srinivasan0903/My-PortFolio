import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import '../css/Contact.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your EmailJS user ID, service ID, and template ID
    const serviceID = 'service_tz5x3tu';
    const templateID = 'template_2k0ehod';
    const userID = 'CtKZfvE3IsmrR0Y4t';

    emailjs.send(serviceID, templateID, formData, userID)
     .then((response) => {
        alert(`Message sent successfully! 😊
        
"Communication is the key to building lasting relationships." 🌟
"Feel free to reach out anytime. I'm just a message away!"`);
        setFormData({ name: '', email: '', message: '' });
        setStatus('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setStatus('Failed to send message. Please try again later.');
      });
  };

  // const notify = () => toast("Wow so easy!");

  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-header">
          <h1>Contact Me</h1>
          <p>Get in touch</p>
        </div>

        <div className="contact-body">
          <div className="contact-details">
            <div className="detail">
              <FaPhoneAlt className="icon" />
              <div>
                <h3>Contact Me</h3>
                <p>9655650879</p>
              </div>
            </div>
            <div className="detail">
              <FaEnvelope className="icon" />
              <div>
                <h3>Email</h3>
                <p>srinisriniraj2003@gmail.com</p>
              </div>
            </div>
            <div className="detail">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h3>Location</h3>
                <p>Salem</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            
              <div className='contact-form-container'>
                <h3 className='contact-form-heading'>You can also contact me by sending a message through the form below. 😊</h3>
              </div>
            
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
            {status && <p className="status-message">{status}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
