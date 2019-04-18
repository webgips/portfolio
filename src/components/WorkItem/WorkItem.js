import React from 'react';

import "./WorkItem.scss";

function WorkItem({match}){
    return (
        <div className="content works">
          <div className="content__title">{match.params.id}</div>
            {console.log(match)}
        </div>
    );
  }
  
  export default WorkItem;
  