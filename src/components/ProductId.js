import React, {Component} from 'react';
import { Link } from 'react-router-dom';
//import request from 'superagent'

class ProductId extends Component {


    render(){
      return(
        <div className="product-id">
          <Link to={`/product/${this.props.id}`}>
          <img src={this.props.imgUrl} alt=""/>
            <div className="product-text">
              <h3>{this.props.name}</h3>
              <p>${this.props.price}</p>
              <p className="hidden">{this.props.id}</p>
              {/*<p><Link className="headers-blue" to="/single">More Details</Link></p>*/}

            </div>
          </Link>
        </div>
    );
  }
}

export default ProductId
