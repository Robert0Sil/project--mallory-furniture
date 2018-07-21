import React, { Component } from 'react';
import request from 'superagent';
//import ProductId from './ProductId';
import SingleId from './SingleId';
//import { Link } from 'react-router-dom';
//import logoImg from '../images/mf-logo-black.svg'
//import ProductId from './ProductId';

class Single extends Component {
  constructor(args){
    super(args)

    this.state = {
      furnObj: {}

    }
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
       console.log(serResJson)

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

   _renSinCards(furniDataList){
     let furniCompLis = this.state.map((cardObj, i)=>{
       return <SingleId
        imgUrl={cardObj.imageLink}
        name={cardObj.item}
        price={cardObj.price}
        cat={cardObj.category}
        id={cardObj._id}
        key={i}
         />
     })
     console.log(furniCompLis)
     return furniCompLis
     //console.log(this.state.furniList);
   }

 render(){

   return (
     <section>
      <div className="item2">

      </div>
      <div className="item4">
        <img src={this.state.furnObj.imageLink} alt=""/>
      </div>
      <div className="item2">
        <h1 >Titulo:  {this.state.furnObj.item}</h1>
        <h2 >Categoría:  {this.state.furnObj.category}</h2>
        <h2 >Precio:  {this.state.furnObj.price}</h2>
      </div>
      <div className="item3">
        


      </div>

    </section>

   );
 }
}


export default Single;
