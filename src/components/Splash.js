import React, { Component } from 'react';
//import request from 'superagent';

class Splash extends Component {
  constructor(args){
    super(args)
    this.state = {furni: 'Featured'}
  }

  _fetchFurniData(comPro){
    let genInR = comPro.match.params.ProId
    console.log(genInR);
    if(genInR === 'S'){
      this.setState({ furni: 'Seating'})
    }else if(genInR === 'T'){
      this.setState({ furni: 'Tables'})
    }else if(genInR === 'D'){
      this.setState({ furni: 'Desks'})
    }else if(genInR === 'St'){
      this.setState({ furni: 'Storage'})
    }else if(genInR === 'B'){
      this.setState({ furni: 'Bedroom'})
    }else if(genInR === 'M'){
      this.setState({ furni: 'Miscellaneous'})
    }else {
      this.setState({ furni: 'Featured'})
    }
    console.log(genInR);
    return genInR
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
