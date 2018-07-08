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

  _fetchFurniData(componentProps){
    let apiReqUrl='https://mallory-furniture-admin.now.sh/api/v1/products'
    {/*let allProInRoute = componentProps.match.gen*/}
    let featProInRoute = 'featured'

    if(typeof allProInRoute !== 'undefined'){
      apiReqUrl = `https://mallory-furniture-admin.now.sh/api/v1/all-products`
    }

    if(typeof featProInRoute !== 'undefined'){
      const genObj = {
        S: 'seating',
        T: 'tables',
        D: 'desks',
        St: 'storage',
        B: 'bedroom',
        M: 'misc'
      }
      apiReqUrl = `https://mallory-furniture-admin.now.sh/api/v1/products?category=${genObj[featProInRoute]}`
    }
    {/*let cgenObj = genObj[featProInRoute] + "-img"*/}

    console.log(apiReqUrl);

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
    this._fetchFurniData(this.props)
   }

   componentWillReceiveProps(newProps){

    //this._fetchFurnitureData(newProps)
   }

   _renFeatCards(furniDataList){
     let filFeatList = this.state.furniList.filter(function(cardObj){
       if(cardObj.featured === true){
         return true
       } if(cardObj.seating === true){
          return true
       } if(cardObj.tables === true){
           return true
       } if(cardObj.desks === true){
            return true
       } if(cardObj.storage === true){
             return true
       } if(cardObj.bedroom === true){
              return true
       } if(cardObj.misc === true){
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

      let featCompLis = featCompList.slice(0,9)

      return featCompLis
   }

 render(){

   return (
     <section>

        <div className="storage-img">
          <p className="titulo">Mallory Furniture</p>
          <h2>Your Furniture is Old</h2>
          <h2>Ours is Older</h2>
       {/*<h3>in route: <code>{this.props.match.url}</code></h3>*/}
       </div>
      
      <div className="midbody">

       <h2>Featured Products</h2>
       <p>Check out some of our favorite listings</p>
    <div className="forniList">
      {this._renFeatCards(this.state.furniList) }
    </div>

    </div>
    </section>
   );
 }
}


export default MidBody;
