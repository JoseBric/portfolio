import React, {useEffect} from 'react';
import { Link } from 'react-router-dom'
import './home.scss'

let logo
let title
let description
let contact

const Home = () => {
  useEffect(() => {
    logo.classList.add('show-up')
    title.classList.add('show-up')
    description.classList.add('show-up')
    contact.classList.add('show-up')
  }, [])

  return (
    <div id="home">
      <div className="big-logo" ref={el=>logo=el}>
        <img src="logo.png" alt="logo"/>
      </div>
      <div className="main-title">
        <div className="flex-container">
          <div className="typewriter">
            <h1 className="title" ref={el=>title=el}>
              Hi, I'm <span className="primary">J</span>osé <span className="primary">B</span>riceño
            </h1>
          </div>
        </div>
        <div className="description" ref={el=>description=el}>
          <p>
            <span className="primary heavy-1">
            Full Stack  
            </span> Developer - Node - Angular - React - Laravel
          </p>
        </div>
      </div>
      <div className="contact" ref={el=>contact=el}>
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
