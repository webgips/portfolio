import React from 'react';
import { Link } from "react-router-dom"

import "./workList.scss";
import {works} from '../../assets/data.json'

const WorkList = ({match}) => {
  return (
    <div className="content works">
      <div className="content__title">Works</div>
        <div className="works__gallery">
          <ul className="works__list">
            {
              works.map((work, index) =>  
                <li className="works__item" key={index}>
                  <Link to={`${match.url}/${work.name}`} className="works__link">
                    <div className="works__link-img">
                      <img src={work.imgUrl} alt={work.name}/>
                    </div>
                    <div className="works__link-name">
                        {work.name}
                    </div>
                  </Link>
                </li>
              )
            }
          </ul>
        </div>
    </div>
  );
  }
  
  export default WorkList;
  