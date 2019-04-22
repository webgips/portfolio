import React from "react";
import './contacts.scss'

const submitHendler = () =>{

}
const Contacts = () => {
  return (
    <div class="contact content">
      <h2 class="content__title">Contacts</h2>
      <div class="contact__content">
        <form class="contact__form" id="contact__form" onSubmit={submitHendler}>
          <div class="contact__text"></div>
          <div class="contact__form-row">
            <textarea
              class="contact__form-textarea"
              name="description"
              minlength="10"
              required="required"
              placeholder="Project Type, Target customer, timeline, estimate etc"
            />
          </div>
          <div class="contact__text">About You </div>
          <div class="contact__form-about-wrap">
            <div class="contact__form-row">
              <input
                class="contact__form-input"
                type="text"
                name="name"
                minlength="3"
                required="required"
                placeholder="Full Name"
              />
              <input
                class="contact__form-input"
                type="email"
                name="email"
                required="required"
                placeholder="Email Address"
              />
            </div>
            <div class="contact__form-row">
              <input
                class="contact__form-input"
                type="text"
                name="company"
                placeholder="Company Name"
              />
            </div>
          </div>
          <button class="contact__form-submit btn" type="submit">
            Request a Quote
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
