import React, { Component } from 'react';
import Banner from './banner.jpg'
import { ClassNames } from '@emotion/react';
import Profile from './profile.png'
import Linkedin from './linkedin.png'
import Gmail from './gmail.png'



class NavBar extends Component {
  render() {
    return (
      <div>
        <img className='banner' src={Banner} />
      <div className="profile-main">
        <div>
        <img className='profile' src={Profile} />
        </div>
        <div className="aboutMe">
        <h2>About Me:</h2>
        <p> 
        Developing and Optimising Tech platforms by leading team and building unique Travel experiences | Ex-Byju’s | Ex-Birdeye | Post-Grad AIML
        </p>
        </div>
      </div>
      <div className="connect">
        <a href="https://www.linkedin.com/in/vidhi-singh-22410b30/" target="_blank"><img src={Linkedin} /></a>
        <a href="mailto:vidhisingh2691@gmail.com" target="_blank"><img className="gmail" src={Gmail} /></a>
      </div>
      </div>
    );
  }
}

export default NavBar;