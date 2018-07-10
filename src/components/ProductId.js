import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class ProductId extends Component {

    render(){
      return(
        <div className="product-id">
          <img src={this.props.imgUrl} Alt=""/>
            <div className="product-text">
              <h3>{this.props.name}</h3>
              <p>${this.props.price}</p>
              <p><Link className="headers-blue" to="/single">More Details</Link></p>

            </div>
        </div>
    );
  }
}

export default ProductId
