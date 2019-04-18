import React from 'react';

import {works} from '../../assets/data.json'
import "./WorkItem.scss";

function WorkItem({match}){
    const workInfo = works.filter((work) => work.name === match.params.id )[0]
    return (
        <div className="content works">
          <div className="content__title">{workInfo.name}</div>
            <div className="work-item">
              <div className="work-item__text">
                {workInfo.about}
              </div>
              <a href={workInfo.link} target="_blank" rel="noopener noreferrer" className="work-item__link">Link to website</a> 
              <img className="work-item__img" src={workInfo.imgUrl} alt=""/>
              
            </div>
        </div>
    );
  }
  
  export default WorkItem;
  