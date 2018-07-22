import React, { Component } from 'react';
//import request from 'superagent';

class Splash extends Component {
  constructor(args){
    super(args)
    this.state = {furni: 'Featured'}
  }

  _fetchFurniData(comPro){
    let genInR = comPro.match.params.ProId
    let tit = 'Featured'
    console.log(genInR);

    if(typeof genInR !== 'undefined'){
      const genObj = {
        S: 'seating',
        T: 'tables',
        D: 'desks',
        St: 'storage',
        B: 'bedroom',
        M: 'miscellaneous'
      }
      tit = `${genObj[genInR]}`
      this.setState({ furni : tit })
    }
  }
    _returnProductCardJsx(splashData){
      let visiPro = this.state.furni
      // visiPro = this.props.;
      console.log(visiPro);

    if(visiPro === 'seating'){
      this.setState({ furni: 'Seating'})
    }else if(visiPro === 'tables'){
      this.setState({ furni: 'Tables'})
    }else if(visiPro === 'desks'){
      this.setState({ furni: 'Desks'})
    }else if(visiPro === 'storage'){
      this.setState({ furni: 'Storage'})
    }else if(visiPro === 'bedroom'){
      this.setState({ furni: 'Bedroom'})
    }else if(visiPro === 'miscellaneous'){
      this.setState({ furni: 'Miscellaneous'})
    }else {
      this.setState({ furni: 'Featured'})
    }
    console.log(visiPro);
    return visiPro
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
