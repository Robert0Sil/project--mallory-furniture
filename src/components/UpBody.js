import React, { Component } from 'react';
import request from 'superagent';
import ProductId from './ProductId';
//import { Headers } from '../data/datasource';
//import { Link } from 'react-router-dom';

//import DownBody from './DownBody';


class MidBody extends Component {
  constructor(args){
    super(args)

    this.state = {
      furniList: []
    }
  }

  _fetchFurniData(compProps){
   let apiReqUrl='https://mallory-furniture-admin.now.sh/api/v1/products'
   console.log(apiReqUrl);
   request
     .get(apiReqUrl)
     .then((serRes)=>{
       const serResJson = serRes.body
       console.log(serResJson)

       this.setState({
           furniList: serResJson
       })
     })
   }

   componentWillMount(){
    this._fetchFurniData(this.props)
   }

   componentWillReceiveProps(newProps){

    //this._fetchFurnitureData(newProps)
   }

   _renFeatCards(furniDataList){
     let filFeatList = this.state.furniList.filter(function(cardObj){
       if(cardObj.featured === true){
         return true
       } else {
         return false
       }

     })

      let featCompList = filFeatList.map((cardObj, i)=>{
        return <ProductId
           imgUrl={cardObj.imageLink}
           name={cardObj.item}
           price={cardObj.price}
           key={i}
           />
      })

      let featCompLis = featCompList.slice(0,6)

      return featCompLis
   }

 render(){

   return (
     <div className="midbody">

      <h2>Featured Products</h2>
      <p>Check out some of our favorite listings</p>

      {/*<h3>in route: <code>{this.props.match.url}</code></h3>*/}

    <div className="forniList">
      {this._renFeatCards(this.state.furniList) }
    </div>

    </div>
   );
 }
}


export default MidBody;
