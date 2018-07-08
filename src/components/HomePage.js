import React, { Component } from 'react';

//import ProductId from './ProductId';
import Splash from './Splash';
import UpBody from './UpBody';
import DownBody from './DownBody';
import Footer from './Footer';
class HomePage extends Component {
  render() {
    return (
      <section>
        <Splash />

        <UpBody />
        <DownBody />

        <Footer />
      </section>

    );

  }
}

export default HomePage;
