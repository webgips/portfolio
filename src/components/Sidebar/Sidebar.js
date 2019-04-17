import React, { Component } from 'react';
import { Link } from "react-router-dom"

import "./sidebar.scss"
import avatar from "../../assets/images/avatar.jpg"
import Socials from '../Socials/Socials'

class Sidebar extends Component {
    render() {
      return (
        <aside className="aside">
          <div className="aside__photo">
            <div className="aside__photo-wrap">
              <img className="aside__photo-img" src={avatar} alt="Avatar" />
            </div>
          </div>
          <nav className="nav">
            <Link className="nav__link" to="/">About</Link>
            <Link className="nav__link" to="/works">Works</Link>
            <Link className="nav__link" to="/contacts">Contacts</Link>
          </nav>
          <Socials />
        </aside>
      );
    }
  }
  
  export default Sidebar;
  