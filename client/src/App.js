import React, { useEffect } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Particles from 'particlesjs'

import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';

function App() {
  useEffect(() => {
    const maxPart = window.innerWidth > 1200 ? 70 : 25;
    Particles.init({
      selector: '#particlesjs',
      connectParticles: true,
      maxParticles: maxPart,
    })

  }, [])
  return (
    <div className="App">
      <canvas id="particlesjs"></canvas>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Projects}/>
          <Redirect from='*' to='/' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
