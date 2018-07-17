import React, { Component } from 'react';
import request from 'superagent';
import ProductId from './ProductId';
import { headers } from '../data/datasource.js';
import { Link } from 'react-router-dom';
import logoImg from '../images/mf-logo-black.svg'
import Footer from './Footer';
import Splash from './Splash';


class MidBody extends Component {
  constructor(args){
    super(args)

    this.state = {
      furniList: []
    }
  }

  _fetchFurniData(componentProps){
    let apiReqUrl='https://mallory-furniture-admin.now.sh/api/v1/products'

    let genderInRoute = componentProps.match.params.ProId

    if(typeof allProInRoute !== 'undefined'){
      apiReqUrl = `https://mallory-furniture-admin.now.sh/api/v1/all-products`
    }

    if(typeof genderInRoute !== 'undefined'){
      const genObj = {
        S: 'seating',
        T: 'tables',
        D: 'desks',
        St: 'storage',
        B: 'bedroom',
        M: 'miscellaneous'
      }
      apiReqUrl = `https://mallory-furniture-admin.now.sh/api/v1/products?category=${genObj[genderInRoute]}`
    }

    request
      .get(apiReqUrl)
      .then((serRes)=>{
        const serResJson = serRes.body
        //console.log(serResJson)

        this.setState({
          furniList : serResJson
        })

      })
   }
   componentWillMount(){
    this._fetchFurniData(this.props)
   }

   componentWillReceiveProps(newProps){

    this._fetchFurniData(newProps)
   }

   _renFeatCards(furniDataList){
     let filFeatList = this.state.furniList.filter(function(cardObj){
       if(cardObj.category === "seating"){
         return true
       }else if(cardObj.category === "tables"){
          return true
       }else if(cardObj.category === "desks"){
           return true
       }else if(cardObj.category === "storage"){
            return true
       }else if(cardObj.category === "bedroom"){
             return true
       }else if(cardObj.category === "miscellaneous"){
              return true
       }else if(cardObj.onsale === true){
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
           cat={cardObj.category}
           id={cardObj._id}
           key={i}
           />

      })
    return featCompList
   }


 render(){

   return (
     <section>

       <Splash />

       <div className="item2">
         <p><Link className="headers-list__red" to="/All-Products">All Items</Link>
         <Link className="headers-list__red" to="/All-Products">On Sale</Link></p>
         <p><span className="item-num">{this.state.furniList.length}</span>  Items Showing</p>
       </div>
    <div className="forniList">
        {this._renFeatCards(this.state.furniList)}
    </div>
    <div className="downbody">
    <img src={logoImg} alt=""/>
    </div>
    <Footer footer = {headers}/>
    </section>
   );
 }
}


export default MidBody;
