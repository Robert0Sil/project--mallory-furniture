import React, { Component } from 'react'
import logoImg from '../images/mf-logo-black.svg'
import { Link } from 'react-router-dom';


class DownBody extends Component {

  render() {
    return(
      <section>
        <div className = "midbody">
          <h1 className="titulo">Browse by Categories</h1>
          <h3 className="titulo1">Explore by furniture type</h3>
        </div>
        <div className="downbody">
          <p><Link className="headers-blue" to="/gender/S">Seating</Link>
          <Link className="headers-blue" to="/gender/T">Tables</Link>
          <Link className="headers-blue" to="/gender/D">Desks</Link>
          <Link className="headers-blue" to="/gender/St">Storage</Link></p>
          <p><Link className="headers-blue" to="/gender/Bt">Bedroom</Link>
          <Link className="headers-blue" to="/gender/M">Misc</Link></p>

        </div>
        <div className="downbody-img">
        <img src={logoImg} alt=""/>
        </div>
      </section>
    );
  }
}

export default DownBody;
