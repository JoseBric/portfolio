import React from 'react';
import './projects.scss';

const Projects = () => {
  return (
    <div id="projects">
      <h1 className="title">
        My <span className="primary">Projects</span>
      </h1>
      <div className="projects-list">
        <div className="project">
          <a href="" target="_blank">
            <img className="project-img" src="/img/mediafan.png" alt="Mediafan Site"/>
          </a>
          <div className="content">
            <p className="project-title">Social Media Website</p>
            <ul className="technologies">
              <li>NodeJs <i class="fab fa-node-js"></i></li>
              <li>Angular 7 <i class="fab fa-angular"></i></li>
              <li>MongoDB <i class="fas fa-database"></i></li>
              <li>Sass <i class="fab fa-sass"></i></li>
              <li>AWS S3 Buckets <i class="fab fa-aws"></i></li>
            </ul>
            <a target="_blank" href="#" className="link-github link">Watch Code <i class="fas fa-code"></i></a>
            <a target="_blank" href="#" className="link-live link">Live Demo <i class="far fa-eye"></i></a>
          </div>
        </div>
        <div className="project">
          <a href="" target="_blank">
            <img className="project-img" src="/img/restaurant.png" alt="Restaurant Site"/>
          </a>
          <div className="content">
            <p className="project-title">Restaurant Website</p>
            <ul className="technologies">
              <li>Laravel <i class="fab fa-laravel"></i></li>
              <li>React <i class="fab fa-react"></i></li>
              <li>MySQL <i class="fas fa-database"></i></li>
              <li>Sass <i class="fab fa-sass"></i></li>
              <li>AWS S3 Buckets <i class="fab fa-aws"></i></li>
            </ul>
            <a target="_blank" href="#" className="link-github link">Watch Code <i class="fas fa-code"></i></a>
            <a target="_blank" href="#" className="link-live link">Live Demo <i class="far fa-eye"></i></a>
          </div>
        </div>
        <div className="project">
          <a href="#" target="_blank">
            <img className="project-img" src="/img/ecommerce.png" alt="Ecommerce Site"/>
          </a>
          <div className="content">
            <p className="project-title">Ecommerce Website</p>
            <ul className="technologies">
              <li>Wordpress <i class="fab fa-wordpress"></i></li>
              <li>Woocommerce <i class="fab fa-wordpress-simple"></i></li>
              <li>CSS <i class="fab fa-css3-alt"></i></li>
              <li>MySQL <i class="fas fa-database"></i></li>
            </ul>
            <a target="_blank" href="#" className="link-github link">Watch Code <i class="fas fa-code"></i></a>
            <a target="_blank" href="#" className="link-live link">Live Demo <i class="far fa-eye"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
