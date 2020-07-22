import React from "react";
import { experience } from "../../editable-stuff/configurations.json";

const Experience = () => {
  console.log(process.env.PUBLIC_URL);
  const getCarousel = () => {
      return (
        <div id="carousel-experience" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                {experience.projects.map((project, index) => {
                    if (index === 0) {
                        return <li key={index} data-target="#carousel-experience" data-slide-to={index} className="active" />
                    }

                    return <li key={index} data-target="#carousel-experience" data-slide-to={index} />
                })}
            </ol>
            <div className="carousel-inner">
                {experience.projects.map((project, index) => {
                    let className = "carousel-item";
                    if (index === 0) {
                        className = `${className} active`;
                    }
                    return (
                        <div key={project.name} className={className}>
                            <a href={project.address} rel="noopener noreferrer" target="_blank">
                                <img className="d-block w-100" src={`${process.env.PUBLIC_URL}\\${project.src}`} alt={project.name} />
                            </a>
                        </div>
                    );
                })}
            </div>
            <a className="carousel-control-prev" href="#carousel-experience" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carousel-experience" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
      );
  };

  return (
    <div id="experience" className="jumbotron jumbotron-fluid m-0">
      <div className="container container-fluid p-5">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="display-4 mb-5 text-center">{experience.heading}</h1>
            {getCarousel()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
