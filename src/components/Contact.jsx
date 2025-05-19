import React from 'react';

export default function Contact() {
  return (
    <section 
      id="contact" 
      className="container" 
      style={{textAlign: 'center', padding: '3rem 1rem', background: 'white', borderRadius: '10px', marginBottom: '4rem'}}
      aria-label="Contact information"
    >
      <h2>Contact Us</h2>
      <p>Call us at <a href="tel:+911234567890">+91 1234567890</a></p>
      <p>Email: <a href="mailto:info@startvith.com">info@startvith.com</a></p>
      <p>Visit us: 123 Business St, City, State</p>
    </section>
  );
}
