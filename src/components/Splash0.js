import React, { Component } from 'react';
import request from 'superagent';

class Splash extends Component {
  constructor(args){
    super(args)
    this.state = {furni: ''}
  }

  _fetchsplaData(compoProps){
    let img='Featured'
    let productInRoute = compoProps.match.params.ProId
    if(typeof productInRoute !== 'undefined'){
      const genObj = {
        S: 'Seating',
        T: 'Tables',
        D: 'Desks',
        St: 'Storage',
        B: 'Bedroom',
        M: 'Miscellaneous'
      }
      img = `${genObj[productInRoute]} `
    }

      this.setState({
        furni : img
      })
   }

   componentWillMount(){
    this._fetchsplaData(this.props)
   }

   componentWillReceiveProps(newProps){

    this._fetchsplaData(newProps)
   }



  render() {
    return (
      <section>
      <div className={`${this.state.furni}-img`}>
        {/*<img src={logoImg} Alt="">*/}

        <p className="titulo2">Mallory Furniture</p>
        <h2>Your Furniture is Old</h2>
        <h2>Ours is Older</h2>
      </div>
      <div className="midbody">

       <h2 className="titulo">{this.state.furni} Products</h2>
       <p className="titulo1">Check out some of our favorite listings</p>
       </div>
      </section>
    );
  }
}

export default Splash
