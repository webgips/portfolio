import React from "react";
import { Link } from "react-router-dom";
import { works } from "../../assets/data.json";
import "./WorkItem.scss";

const WorkItem = props => {
  const workInfo = works.filter(work => work.id === props.match.params.id)[0];
  return (
    <div className="content works">
      <div className="content__title">{workInfo.name}</div>
      <div className="work-item">
        <div className="work-item__desc">{workInfo.about}</div>
        <div>
          <div className="work-item__tech">used technologies stack</div>
          <ul className="work-item__tech-list">
            {workInfo.stack.map((tech, index) => (
              <li className="work-item__tech-item" key={index}>
                <Link
                  to={{
                    pathname: "/works/",
                    search: `?sort=${tech}`
                  }}
                  className="tech-link"
                >
                  {tech}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <a
          href={workInfo.link}
          target="_blank"
          rel="noopener noreferrer"
          className="work-item__link"
        >
          Link to website
        </a>
        <img className="work-item__img" src={workInfo.imgUrl} alt="" />
      </div>
    </div>
  );
};
export default WorkItem;
