import React from 'react';
import './about.scss';

const About = () => {
  return (
    <div id="about">
      <h1 className="title">
        About <span className="primary">Me</span> 
      </h1>
      <div className='description'>
        I'm a self taught Full Stack Web Developer who has been learning about the industry since 2015. I've been a freelancer for most of my career. I got a part time job at Rivka Technologies in 2018 and I stopped working there in June 2019. I've worked remotely with very talented people to create sleek and high quality web applications.
      </div>
      <div className="skills">
        <h2 className="subtitle">
          These are my <span className="primary">skills</span>
        </h2>
        <div className="skills-lists">
          <div className="fe-skill-set">
            <h3>Front-end skill set</h3>
            <ul>
              <li className="primary">
                Angular 2+
              </li>
              <li className="primary">
                ReactJS
              </li>
              <li className="primary">
                Redux
              </li>
              <li className="secondary-green">
                Bootstrap
              </li>
              <li className="secondary-green">
                SASS
              </li>
              <li className="secondary-green">
                Responsive Design
              </li>
              <li className="secondary-blue">
                Adobe XD (UI/UX)
              </li>
            </ul>
          </div>
          <div className="be-skill-set">
            <h3>Back-end skill set</h3>
            <ul>
              <li className="primary">
                Express
              </li>
              <li className="primary">
                NodeJs
              </li>
              <li className="secondary-green">
                Laravel
              </li>
              <li className="secondary-green">
                PHP
              </li>
              <li className="secondary-blue"> 
                MongoDB
              </li>
              <li className="secondary-blue">
                MySQL
              </li>
              <li className="secondary-blue">
                Amazon Web Services
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
