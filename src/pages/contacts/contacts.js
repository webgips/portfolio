import React, { Component } from "react";
import "./contacts.scss";
import firebase from 'firebase/app';
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCFHTIkgFfmZLscAgQuwqfOIi3lvvy65n8",
    authDomain: "maxim-markov.firebaseapp.com",
    databaseURL: "https://maxim-markov.firebaseio.com/"
  };
   
firebase.initializeApp(firebaseConfig)
var database = firebase.database();
const messagesRef = database.ref('messages')

class Contacts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      description: null,
      email: null,
      company: null
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  hideForm(){
    document.getElementById("contact__form").style.display = 'none'
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log("Имя " + this.state.name);
    messagesRef.push(this.state).then(()=>{
      console.log('add to databse')
      this.setState({
        name: null,
        description: null,
        email: null,
        company: null
      })
      this.hideForm()
    })
  }
  render() {
    return (
      <div className="contact content">
        <h2 className="content__title">Contacts</h2>
        <div className="contact__content">
          <form
            className="contact__form"
            id="contact__form"
            onSubmit={this.handleSubmit}
          >
            <div className="contact__text" />
            <div className="contact__form-row">
              <textarea
                className="contact__form-textarea"
                name="description"
                minLength="10"
                required="required"
                placeholder="Project Type, Target customer, timeline, estimate etc"
                onChange={this.handleInputChange}
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
                  onChange={this.handleInputChange}
                />
                <input
                  className="contact__form-input"
                  type="email"
                  name="email"
                  required="required"
                  placeholder="Email Address"
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="contact__form-row">
                <input
                  className="contact__form-input"
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <button className="contact__form-submit btn">
              Request a Quote
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contacts;
