import React, { Component } from 'react';
import request from 'superagent';
import Footer from './Footer';
import { headers } from '../data/datasource.js';

class Single extends Component {
  constructor(args){
    super(args)

    this.state = { furnObj: {} }
  }

  _fetchSingData(comProps){
    let apiReqUrl='https://mallory-furniture-admin.now.sh/api/v1/products'
    let productInRoute = comProps.match.params.PId

    if(typeof productInRoute !== 'undefined'){
      apiReqUrl = `https://mallory-furniture-admin.now.sh/api/v1/products/${productInRoute}`
    }

   request
     .get(apiReqUrl)
     .then((serRes)=>{
       const serResJson = serRes.body
       //console.log(serResJson)
       this.setState({
           furnObj : serResJson
       })
     })
   }

   componentWillMount(){
    this._fetchSingData(this.props)
   }
   componentWillReceiveProps(newProps){
    //this._fetchSinData(newProps)
   }

   render(){

     return (
       <section>
        <div className="forniList">
          <img src={this.state.furnObj.imageLink} alt=""/>
          <div className="forniList3">
            <h1 className="titulo1">{this.state.furnObj.item}</h1>
            <h3 className="item2">${this.state.furnObj.price}</h3>
            <div className="downbody">
              <p><span className="headers-blue2" >Condition</span>
              <span className="headers-blue2" >Measurements</span>
              <span className="headers-blue2" >Add to cart</span></p>
              <p><span className="headers-blue2">{this.state.furnObj.condition}</span>
              <span className="headers-blue2" >W:{this.state.furnObj.width}  H:{this.state.furnObj.height}  L:{this.state.furnObj.length}</span>
              <span className="headers-blue2" >Add to cart</span></p>
            </div>

            <p >{this.state.furnObj.category}</p>
          </div>
        </div>
      <Footer footer = {headers}/>
      </section>

     );
   }

  }

  export default Single;
