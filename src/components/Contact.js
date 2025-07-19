import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css"
const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    // Validate form inputs
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("All fields are required.");
      return;
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_goly8vu",  // Replace with your EmailJS Service ID
        "template_np1nbku", // Replace with your EmailJS Template ID
        templateParams,
        "-phEEgE8W6dtkQh0L"   // Replace with your EmailJS Public Key
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSuccessMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setErrorMessage("Failed to send message. Please try again.");
      });
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-subtitle">Send me a message.</p>

      {successMessage && <div className="alert success-alert">{successMessage}</div>}
      {errorMessage && <div className="alert error-alert">{errorMessage}</div>}

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name"
            name="name" 
            placeholder="Your Name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email"
            name="email" 
            placeholder="Your Email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea 
            id="message"
            name="message" 
            placeholder="Your Message" 
            value={formData.message} 
            onChange={handleChange} 
            required
            rows="6"
          ></textarea>
        </div>
        
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
