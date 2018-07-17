import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../images/mf-logo-white.svg';


class Header extends Component {

  constructor(clasprop){

    super(clasprop)
    this.state={isSelec: true}
  }
  _toggleSel(){
    let newObj
    if(this.state.isSelec === true){
      newObj = {isSelec : false }
    }else{
    newObj = {isSelec : true}
    }
    this.setState(newObj)
  }

  _genHeaderJsx(){
    //console.log(this.props.header);
    const headArr = this.props.header.map(function(footStr, index){
      //console.log(footStr);

      return <span key={index}>{footStr}</span>

    })
    //console.log(headArr);

    return headArr

  }


  render() {
    let techlis
    if(this.state.isSelec === true){
      techlis = `buylist--hidden`
    }else{
      techlis = ''
    }
    return(
      <section>
        {/*<h4>Footer</h4>*/}

        <div className = "headers-list">
          <Link className="headers-list__single" to="/"><img src={logoImg} alt=""/></Link>
          <Link className="headers-list__single" to="/about">{this._genHeaderJsx()[0]}</Link>
          <Link className="headers-list__single" to="/Terms+Conditions">{this._genHeaderJsx()[1]}</Link>
          <span className="headers-list__single"> | </span>
          <Link className="headers-list__single" to="/All-Products">{this._genHeaderJsx()[3]}</Link>
          <Link className="headers-list__blue" to="/gender/S">{this._genHeaderJsx()[4]}</Link>
          <Link className="headers-list__blue" to="/gender/T">{this._genHeaderJsx()[5]}</Link>
          <Link className="headers-list__blue" to="/gender/D">{this._genHeaderJsx()[6]}</Link>
          <Link className="headers-list__blue" to="/gender/St">{this._genHeaderJsx()[7]}</Link>
          <Link className="headers-list__blue" to="/gender/B">{this._genHeaderJsx()[8]}</Link>
          <Link className="headers-list__blue" to="/gender/M">{this._genHeaderJsx()[9]}</Link>
          <span className="headers-list__single"> | </span>

          <Link className="navbar" to="#"><i className="ion-ios-cart-outline"></i></Link>
          <div className={`buylist ${techlis}`}>
          <span className="techlist__icon devicons devicons-github_badge"/>
          <span className="techlist__icon devicons devicons-git"/>
          <span className="techlist__icon devicons devicons-html5"/>
          <span className="techlist__icon devicons devicons devicons-css3"/>
          <span className="techlist__icon devicons devicons-sass"/>
          <span className="techlist__icon devicons devicons-linux"/>
          <span className="techlist__icon devicons devicons devicons-nodejs"/>
          <span className="techlist__icon devicons devicons devicons-react"/>
          <span className="techlist__icon devicons devicons devicons-illustrator"/>
        </div>
        </div>

      </section>
    );
  }
}

export default Header;
