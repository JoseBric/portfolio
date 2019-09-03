import React, {useEffect} from 'react';
import { Link } from 'react-router-dom'
import './home.scss'

const Home = () => {

  return (
    <div id="home">
      <div className="big-logo" >
        <img src="logo.png" alt="logo"/>
      </div>
      <div className="main-title">
        <div className="flex-container">
          <div className="typewriter">
            <h1 className="title" >
              Hi, I'm <span className="primary">J</span>osé <span className="primary">B</span>riceño
            </h1>
          </div>
        </div>
        <div className="description" >
          <p>
            <span className="primary heavy-1">
            Full Stack  
            </span> Developer - Node - Angular - React - Laravel
          </p>
        </div>
      </div>
      <div className="contact" >
        <p className="email">
          josebric@hotmail.com
        </p>
        <p className="phone">
          +52 6624193497
        </p>
      </div>
    </div>
  );
}

export default Home;
