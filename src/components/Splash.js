import React, { Component } from 'react';
//import request from 'superagent';

class Splash extends Component {
  constructor(args){
    super(args)
    this.state = {
        titImg : 'Featured'
      }

  }
  _fetchFurniData(visiTitImg){
    let genTit = visiTitImg.match.params.ProId

  if(typeof genTit !== 'undefined'){
    const gen = {
      S: 'seating',
      T: 'tables',
      D: 'desks',
      St: 'storage',
      B: 'bedroom',
      M: 'miscellaneous'
    }
    genTit = `${gen[genTit]}`
  }
    this.setState({ titImg : genTit })
    console.log(genTit);
 }



  render() {
    return (
      <section>
      <div className={`${this.state.titImg}-img`}>
        {/*<img src={logoImg} Alt="">*/}

        <p className="titulo2">Mallory Furniture</p>
        <h2>Your Furniture is Old</h2>
        <h2>Ours is Older</h2>
      </div>
      <div className="midbody">

       <h2 className="titulo">{this.state.titImg} Products</h2>
       <p className="titulo1">Check out some of our favorite listings</p>
       </div>
      </section>
    );
  }
}

export default Splash
