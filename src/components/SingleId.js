import React, {Component} from 'react';
//import { Link } from 'react-router-dom';
//import Single from './Single';

class SingleId extends Component {
 //const apiReqUrl = `https://mallory-furniture-admin.now.sh/api/v1/products/${this.props.id}`

    render(){
      return(
        <div className="product-id">

          <img className="forniList" src={this.props.imgUrl} Alt=""/>
            <div className="product-text">
              <h3>{this.props.name}</h3>
              <p>${this.props.price}</p>

              {/*<p><Link className="headers-blue" to="/single">More Details</Link></p>*/}

            </div>

        </div>
    );
  }
}

export default SingleId
