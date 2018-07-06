import React, { Component } from 'react'
import logoImg from '../images/mf-logo-black.svg'


class DownBody extends Component {

  render() {
    return(
      <section>
        <div className = "downbody">
        <h1>Browse by Categories</h1>
        <h3>Explore by furniture type</h3>

        <img src={logoImg} alt=""/>
        </div>
      </section>
    );
  }
}

export default DownBody;
