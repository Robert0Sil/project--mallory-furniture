import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../images/mf-logo-white.svg';


class Header extends Component {

  _genHeaderJsxA(){

    const headArr = this.props.header.map(function(footStr, index){
      //console.log(footStr);

      return <span key={index}>{footStr}</span>

    })
    //console.log(headArr);
    let headArray = headArr.slice(0,1)
    return headArray

  }

  _genHeaderJsxB(){

    const headArr = this.props.header.map(function(footStr, index){
      //console.log(footStr);

      return <span key={index}>{footStr}</span>

    })
    //console.log(headArr);
    let headArrby = headArr.slice(1,2)
    return headArrby

  }

  _genHeaderJsxC(){

    const headArr = this.props.header.map(function(footStr, index){
      //console.log(footStr);

      return <span key={index}>{footStr}</span>

    })
    //console.log(headArr);
    let headArrcy = headArr.slice(3,4)
    return headArrcy

  }

  _genHeaderJsxD(){

    const headArr = this.props.header.map(function(footStr, index){
      //console.log(footStr);

      return <span key={index}>{footStr}</span>

    })
    //console.log(headArr);
    let headArrdy = headArr.slice(4,5)
    return headArrdy

  }

  _genHeaderJsxE(){

    const headArr = this.props.header.map(function(footStr, index){
      //console.log(footStr);

      return <span key={index}>{footStr}</span>

    })
    //console.log(headArr);
    let headArrey = headArr.slice(5,6)
    return headArrey

  }

  _genHeaderJsxF(){

    const headArr = this.props.header.map(function(footStr, index){
      //console.log(footStr);

      return <span key={index}>{footStr}</span>

    })
    //console.log(headArr);
    let headArrfy = headArr.slice(6,7)
    return headArrfy

  }

  _genHeaderJsxG(){

    const headArr = this.props.header.map(function(footStr, index){
      //console.log(footStr);

      return <span key={index}>{footStr}</span>

    })
    //console.log(headArr);
    let headArrgy = headArr.slice(7,8)
    return headArrgy

  }

  _genHeaderJsxH(){

    const headArr = this.props.header.map(function(footStr, index){
      //console.log(footStr);

      return <span key={index}>{footStr}</span>

    })
    //console.log(headArr);
    let headArrhy = headArr.slice(8,9)
    return headArrhy

  }

  _genHeaderJsxI(){

    const headArr = this.props.header.map(function(footStr, index){
      //console.log(footStr);

      return <span key={index}>{footStr}</span>

    })
    //console.log(headArr);
    let headArriy = headArr.slice(9,10)
    return headArriy

  }


  render() {
    return(
      <section>
        {/*<h4>Footer</h4>*/}

        <div className = "headers-list">
          <Link className="headers-list__single" to="/"><img src={logoImg} alt=""/></Link>
          <Link className="headers-list__single" to="/about">{this._genHeaderJsxA()}</Link>
          <Link className="headers-list__single" to="/Terms+Conditions">{this._genHeaderJsxB()}</Link>
          <span className="headers-list__single"> | </span>
          <Link className="headers-list__single" to="/All-Products">{this._genHeaderJsxC()}</Link>
          <Link className="headers-list__blue" to="/gender/S">{this._genHeaderJsxD()}</Link>
          <Link className="headers-list__blue" to="/gender/T">{this._genHeaderJsxE()}</Link>
          <Link className="headers-list__blue" to="/gender/D">{this._genHeaderJsxF()}</Link>
          <Link className="headers-list__blue" to="/gender/St">{this._genHeaderJsxG()}</Link>
          <Link className="headers-list__blue" to="/gender/B">{this._genHeaderJsxH()}</Link>
          <Link className="headers-list__blue" to="/gender/M">{this._genHeaderJsxI()}</Link>
          <span className="headers-list__single"> | </span>

          <Link className="navbar" to="#"><i className="ion-ios-cart-outline"></i></Link>
        </div>

      </section>
    );
  }
}

export default Header;
