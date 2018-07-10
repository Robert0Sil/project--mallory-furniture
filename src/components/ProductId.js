import React, {Component} from 'react';
//import PuSub from '../utils/pubsub';

class ProductId extends Component {

    render(){
      return(
        <div className="product-id">
          <img src={this.props.imgUrl} Alt=""/>
            <div className="product-text">
              <h3>{this.props.name}</h3>
              <p>${this.props.price}</p>
              {/*}<button
                className="btn btn--primary btn--samll"
                onClick={ ()=>this._handleProfileInfoClick()}>
                See more Details
              </button>*/}
            </div>
        </div>
    );
  }
}

export default ProductId
