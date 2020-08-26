import React from 'react'
import "./Contact.css";
function Contact() {
  return (
    <div class="contact-section">
      <h4 class="section__header">Want to get in touch?</h4>

      <div class="contact-form__container">
        <form class="contact-form">
          <h4 class="contact-form__header">I'd love to hear from you, you can get in touch by filling out the form below</h4>
          <input class="contact-form__input" type="text" placeholder="Name" />
          <input class="contact-form__input" type="text" placeholder="Email" />
          <textarea class="contact-form__input" type="text-area" placeholder="Your Message" />
          <button class="contact-form__submit" type="submit">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;
