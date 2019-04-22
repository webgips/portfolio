import React from "react";
import './contacts.scss'

const submitHendler = () =>{

}
const Contacts = () => {
  return (
    <div className="contact content">
      <h2 className="content__title">Contacts</h2>
      <div className="contact__content">
        <form className="contact__form" id="contact__form" onSubmit={submitHendler}>
          <div className="contact__text"></div>
          <div className="contact__form-row">
            <textarea
              className="contact__form-textarea"
              name="description"
              minLength="10"
              required="required"
              placeholder="Project Type, Target customer, timeline, estimate etc"
            />
          </div>
          <div className="contact__text">About You </div>
          <div className="contact__form-about-wrap">
            <div className="contact__form-row">
              <input
                className="contact__form-input"
                type="text"
                name="name"
                minLength="3"
                required="required"
                placeholder="Full Name"
              />
              <input
                className="contact__form-input"
                type="email"
                name="email"
                required="required"
                placeholder="Email Address"
              />
            </div>
            <div className="contact__form-row">
              <input
                className="contact__form-input"
                type="text"
                name="company"
                placeholder="Company Name"
              />
            </div>
          </div>
          <button className="contact__form-submit btn" type="submit">
            Request a Quote
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
