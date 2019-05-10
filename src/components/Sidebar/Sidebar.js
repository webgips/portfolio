import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./sidebar.scss";
import avatar from "../../assets/images/avatar.jpg";
import Socials from "../Socials/Socials";

const toggleAside = () => {
  document.querySelector(".app").classList.toggle("show-aside");
};
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
          <NavLink
            className="nav__link"
            activeClassName="nav__link-active"
            exact
            to="/"
            onClick={toggleAside}
          >
            About
          </NavLink>
          <NavLink
            className="nav__link"
            activeClassName="nav__link-active"
            to="/works"
            onClick={toggleAside}
          >
            Works
          </NavLink>
          <NavLink
            className="nav__link"
            activeClassName="nav__link-active"
            exact
            to="/contacts"
            onClick={toggleAside}
          >
            Contacts
          </NavLink>
        </nav>
        <Socials />
      </aside>
    );
  }
}

export default Sidebar;
