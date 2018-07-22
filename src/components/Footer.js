import React, {Component} from 'react';
import {Link} from 'react-router-dom'
//import FootImg from '../images/mf-logo-black.svg'

class Footer extends Component {
  _genFootJsx(){

    const footArry = this.props.footer.map(function(footStr, index){
      //console.log(footStr);
      return <span key={index}>{footStr}</span>
    })
    //console.log(dowboArry);

    return footArry
  }

  render(){
    return(
      <section>
        <div className="footer">
          {/*<img src={FootImg}/>*/}
          <div className="company-footer">
            <h3>Company</h3>
              <Link to="/about">{this._genFootJsx()[0]}</Link>
              <Link to="/Terms+Conditions">{this._genFootJsx()[1]}</Link>
          </div>

          <div className="categories-footer">
            <h3>Category</h3>
              <Link to="/gender/S">{this._genFootJsx()[4]}</Link>
              <Link to="/gender/T">{this._genFootJsx()[5]}</Link>
              <Link to="/gender/M">{this._genFootJsx()[9]}</Link>
          </div>

          <div className="social-footer">
             <h3>Social</h3>
              <Link to="#"> <i className="ion-social-instagram-outline"></i> </Link>
              <Link to="#"> <i className="ion-social-twitter-outline"></i> </Link>
              <Link to="#"> <i className="ion-social-pinterest-outline"></i> </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer
