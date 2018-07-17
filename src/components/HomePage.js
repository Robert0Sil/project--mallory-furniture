import React, { Component } from 'react';

//import ProductId from './ProductId';
import Splash from './Splash';
import UpBody from './UpBody';
import DownBody from './DownBody';
import Footer from './Footer';
import { headers } from '../data/datasource.js';

class HomePage extends Component {


  render() {
    return (
      <section>
        <Splash />

        <UpBody />

        <DownBody downbody = {headers}/>

        <Footer footer = {headers}/>
      </section>

    );

  }
}

export default HomePage;
