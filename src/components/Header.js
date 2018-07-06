import React, { Component } from 'react'
import logoImg from '../images/mf-logo-white.svg'


class Header extends Component {

  _genHeaderJsx(){

    const headArr = this.props.header.map(function(footStr, index){
      //console.log(footStr);
      return <span className = "headers-list__single" key={index}>{footStr}</span>

    })
    return headArr
    //console.log(headArr);
  }
  render() {
    return(
      <section>
        {/*<h4>Footer</h4>*/}
        <div className = "App-header">
        <div className = "headers-list">
          <img src={logoImg} alt=""/>
          {this._genHeaderJsx()}

        </div>
        </div>
      </section>
    );
  }
}

export default Header;
