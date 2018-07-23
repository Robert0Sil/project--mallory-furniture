import React, { Component } from 'react'
import logoImg from '../images/mf-logo-black.svg'
import { Link } from 'react-router-dom';

class DownBody extends Component {

  _genDoBoJsx(){

    const dowboArry = this.props.downbody.map(function(dowbo, index){
      //console.log(footStr);
      return <span key={index}>{dowbo}</span>
    })
    //console.log(dowboArry);
    return dowboArry
  }

  render() {
    return(
      <section>
      <div className="headers-list__red">
        <Link to="/All-Products">{this._genDoBoJsx()[3]} Products</Link>
      </div>
        <div className = "midbody">
          <h1 className="titulo">Browse by Categories</h1>
          <h3 className="titulo1">Explore by furniture type</h3>
        </div>
        <div className="downbody">
          <p><Link className="headers-blue" to="/gender/S">{this._genDoBoJsx()[4]}</Link>
          <Link className="headers-blue" to="/gender/T">{this._genDoBoJsx()[5]}</Link>
          <Link className="headers-blue" to="/gender/D">{this._genDoBoJsx()[6]}</Link>
          <Link className="headers-blue" to="/gender/St">{this._genDoBoJsx()[7]}</Link></p>
          <p><Link className="headers-blue" to="/gender/B">{this._genDoBoJsx()[8]}</Link>
          <Link className="headers-blue" to="/gender/M">{this._genDoBoJsx()[9]}</Link></p>
        </div>
        <div className="downbody-img">
        <img src={logoImg} alt=""/>
        </div>
      </section>
    );
  }

}

export default DownBody;
