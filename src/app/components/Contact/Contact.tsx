'use client';

import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact-split">
      <div className="contact-container">
        {/* Left Side Image */}
        <div className="contact-image">
          <img src="/contactus.png" alt="Contact" />
        </div>

        {/* Right Side Form */}
        <div className="contact-form-wrapper">
          <h2>Get in Touch</h2>
          <p>Fill out the form and I'll get back to you shortly!</p>
          <form
            action="https://formspree.io/f/mqkrbyqa"
            method="POST"
            className="contact-form"
          >
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows={5} required></textarea>
            <button type="submit">Send Message</button>
          </form>


        </div>
      </div>
    </section>
  );
}
