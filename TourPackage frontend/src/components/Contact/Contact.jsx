import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <div class="container">
  <div class="">
    <h1 className="head-color display-5">Contact us form</h1>
  </div>
  <div class="contact-form">
    <div class="input-fields">
      <input type="text" class="input" placeholder="Name"/>
      <input type="text" class="input" placeholder="Email Address"/>
      <input type="text" class="input" placeholder="Phone"/>
      <input type="text" class="input" placeholder="Subject"/>
    </div>
    <div class="msg">
      <textarea placeholder="Message"></textarea>
      <button class="btn btn-primary">Send</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Contact;