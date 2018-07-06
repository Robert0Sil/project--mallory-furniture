import React, { Component } from 'react'
import logoImg from '../images/landing-splash-bg.png'

class Splash extends Component {

  render() {

    return(
      <section>
        {/*<h4>Splash</h4>*/}
        <div className="splash-img">
          <img src={logoImg} alt=""/>
          <p>Mallory Furniture</p>
          <p>Your Furniture is Old</p>
          <p>Ours is Older</p>
        </div>
      </section>
    );
  }
}


export default Splash;
