import React from "react";
import { Link } from "react-router-dom";

import "./about.scss";

const About = () => {
  return (
    <div className="content about">
      <h2 className="content__title">About</h2>
      <div className="about__content">
        <div className="about__name">Maxim Markov</div>
        <div className="about__job">Frontend Developer</div>
        <div className="about__desc">
          I'm a 27-year-old developer from Minsk. I creates websites that are
          beautiful, interactive, responsive and friendly.
        </div>
        <div className="about__stack">
          <div className="about__stack-title">My stack:</div>
          <div className="about__stack-list">
            HTML5(Pug), CSS3(SCSS, RWD, Animations, LESS/SASS), JS(ES6), Jquery,
            Vue.js (Vuex,Vue-router), React.js (React-router), Gulp, Webpack,
            Terminal, Git, Docker;
          </div>
        </div>
        <div className="about__btns">
          <Link
            className="about__btns-hire about__btn"
            to="/contacts"
            exact="exact"
          >
            Contact me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
