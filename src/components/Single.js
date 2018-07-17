import React, { Component } from 'react';
import request from 'superagent';
//import ProductId from './ProductId';
import SingleId from './SingleId';
//import { Link } from 'react-router-dom';
//import logoImg from '../images/mf-logo-black.svg'
//import ProductId from './ProductId';
//import Splash from './Splash';


class Single extends Component {
  constructor(args){
    super(args)

    this.state = {
      furniList: []

    }
  }

  _fetchSingData(comProps){
    let apiReqUrl='https://mallory-furniture-admin.now.sh/api/v1/products'

    let productInRoute = comProps.match.params.PId
    console.log(productInRoute);
    if(typeof allProInRoute !== 'undefined'){
      apiReqUrl = `https://mallory-furniture-admin.now.sh/api/v1/all-products`
    }

    if(typeof productInRoute !== 'undefined'){

      apiReqUrl = `https://mallory-furniture-admin.now.sh/api/v1/products/${productInRoute}`
    }

   request
     .get(apiReqUrl)
     .then((serRes)=>{
       const serResJson = serRes.body
       console.log(serResJson)

       this.setState({
           furniList : serResJson
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
     let furniCompLis = this.state.furniList.map((cardObj, i)=>{
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
     console.log(this.state.furniList);
   }

 render(){

   return (

      <div className="forniList">
        {/*{this._renSinCards(this.state.furniList) }*/}
        <h1>En Construcción</h1>
        {this.props.imgUrl}
      </div>



   );
 }
}


export default Single;
