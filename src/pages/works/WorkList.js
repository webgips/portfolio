import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./workList.scss";
import { works, stack } from "../../assets/data.json";

const getParams = search => {
  const searchParams = new URLSearchParams(search);
  return {
    sort: searchParams.get("sort") || ""
  };
};

const updateSearch = (props, component) => {
  const params = getParams(props.location.search);

  if (params.sort.length > 0) {
    const filteredWorks = component.state.worksList.filter(work => {
      return work.stack.some(stack => stack === params.sort);
    });
    component.setState({ tech: params.sort });
    component.setState({ worksList: filteredWorks });
  }
};

class WorkList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      worksList: works,
      tech: null,
      allStack: stack
    };
  }
  componentDidMount() {
    const params = getParams(this.props.location.search);

    if (params.sort.length > 0) {
      const filteredWorks = this.state.worksList.filter(work => {
        return work.stack.some(stack => stack === params.sort);
      });
      this.setState({ tech: params.sort });
      this.setState({ worksList: filteredWorks });
    }
  }
  componentDidUpdate(prevProps) {
    if (!prevProps.location.search.length) {
      updateSearch(this.props, this);
    }
  }

  render() {
    const match = this.props.match;
    const tech = this.state.tech;

    const resetSearch = () => {
      this.setState({ tech: null });
      this.setState({ worksList: works });
    };
    return (
      <div className="content works">
        <div className="content__title">Works</div>
        <div className="works__gallery">
          {tech && (
            <div className="works__filter">
              <div className="tech-link">{tech}</div>
              <Link to="/works/" onClick={resetSearch} className="tech-reset">
                x
              </Link>
            </div>
          )}
          {!tech && (
            <div className="works__filter">
              {this.state.allStack.map((tech, index) => (
                <Link
                  to={{
                    pathname: "/works/",
                    search: `?sort=${tech}`
                  }}
                  className="tech-link"
                  key={index}
                >
                  {tech}
                </Link>
              ))}
            </div>
          )}
          <ul className="works__list">
            {this.state.worksList.map(work => (
              <li className="works__item" key={work.id}>
              {console.log(match)}
                <Link
                  to={`${match.url}${work.id}`}
                  className="works__link"
                >
                  <div className="works__link-img">
                    <img src={work.imgUrl} alt={work.name} />
                  </div>
                  <div className="works__link-name">{work.name}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default WorkList;
