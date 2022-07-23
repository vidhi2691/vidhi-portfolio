import React, { Component } from 'react';
import Banner from './banner.jpg';
import Profile from './profile.png';
import Linkedin from './linkedin.png';
import Gmail from './gmail.png';

class NavBar extends Component {
  render() {
    return (
      <div>
        <img className='banner' src={Banner} alt="banner"/>
      <div className="profile-main">
        <div>
        <img className='profile' src={Profile} alt="profile"/>
        </div>
        <div className="aboutMe">
        <h2>About Me:</h2>
        <p> 
        Developing and Optimising Tech platforms by leading team and building unique Travel experiences | Ex-Byju’s | Ex-Birdeye | Post-Grad AIML
        </p>
        </div>
      </div>
      <div className="connect">
        <a href="https://www.linkedin.com/in/vidhi-singh-22410b30/" target="_blank" rel="noreferrer"><img src={Linkedin} alt="linkedin"/></a>
        <a href="mailto:vidhisingh2691@gmail.com" target="_blank" rel="noreferrer"><img className="gmail" src={Gmail} alt="gmail"/></a>
      </div>
      </div>
    );
  }
}

export default NavBar;