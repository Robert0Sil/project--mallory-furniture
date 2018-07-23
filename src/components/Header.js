import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../images/mf-logo-white.svg';
import Splash from './Splash';

class Header extends Component {
  constructor(clasprop){
    super(clasprop)
    this.state={
      isSelec: true,
      visibleFurniture: 'Featured',
      newvisiPro: ''
    }
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

  _hanProClick(clickedVal){
    this.setState({
      visibleFurniture : clickedVal
    })
    let titImg = this.state.visibleFurniture;
    console.log(titImg);
    console.log(this.state.visibleFurniture);
    return <Splash
        spl={this.state.visibleFurniture}
        />
  }

  _returnTitJsx(titImg){
    let visiPro = this.state.visibleFurniture;
    // visiPro = this.props.;
    console.log(visiPro);

    return visiPro
  }

  render() {
    let techlis
    if(this.state.isSelec === true){
      techlis = `--hidden`
    }else{
      techlis = ''
    }
    return(
      <section>
        <div className = "headers-list">
          <span data-ptype="Featured" onClick={ ()=>{ this._hanProClick('Featured')}}><Link className="headers-list__single" to="/"><img src={logoImg} alt=""/></Link></span>
          <Link className="headers-list__single" to="/about">{this._genHeaderJsx()[0]}</Link>
          <Link className="headers-list__single" to="/Terms+Conditions">{this._genHeaderJsx()[1]}</Link>
          <span className="headers-list__single"> | </span>
          <Link className="headers-list__single" to="/All-Products">{this._genHeaderJsx()[3]}</Link>
          <span data-ptype="Sea" onClick={ ()=>{ this._hanProClick('Seating')}}><Link className="headers-list__blue" to="/gender/S">{this._genHeaderJsx()[4]}</Link></span>
          <span data-ptype="Tab" onClick={ ()=>{ this._hanProClick('Tables')}}><Link className="headers-list__blue" to="/gender/T">{this._genHeaderJsx()[5]}</Link></span>
          <span data-ptype="Des" onClick={ ()=>{ this._hanProClick('Desks')}}><Link className="headers-list__blue" to="/gender/D">{this._genHeaderJsx()[6]}</Link></span>
          <span data-ptype="Sto" onClick={ ()=>{ this._hanProClick('Storage')}}><Link className="headers-list__blue" to="/gender/St">{this._genHeaderJsx()[7]}</Link></span>
          <span data-ptype="Bed" onClick={ ()=>{ this._hanProClick('Bedroom')}}><Link className="headers-list__blue" to="/gender/B">{this._genHeaderJsx()[8]}</Link></span>
          <span data-ptype="Misc" onClick={ ()=>{ this._hanProClick('Misc')}}><Link className="headers-list__blue" to="/gender/M">{this._genHeaderJsx()[9]}</Link></span>
          <span className="headers-list__single"> | </span>

          <span data-ptype="buylist" onClick={ ()=>{ this._toggleSel()}}><Link className="navbar" to="#"><i className="ion-ios-cart-outline"></i></Link></span>
          <div className={`buylist${techlis}`}>
            <div className="position">
              <span className="navbar">En Construcción</span>
              <span className="devicons devicons-github_badge"/>
              <span className="devicons devicons-git"/>
            </div>
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
