import React, {Component} from 'react';
import request from 'superagent'
import ProductId from './ProductId.js'
import Footer from './Footer';
import { headers } from '../data/datasource.js';
import { Link } from 'react-router-dom';


class All_Products extends Component {
  constructor(args){
    super(args)
    this.state = {
        furniList : [],
        visibleFurniture : 'Sale'
      }

  }

  _fetchFurniData(compProps){
    let apiReqUrl='https://mallory-furniture-admin.now.sh/api/v1/products'
    request
      .get(apiReqUrl)
      .then((serRes)=>{
        const serResJson = serRes.body
        //console.log(serResJson)

        this.setState({ furniList : serResJson })
      })
   }

    componentWillMount(){
     this._fetchFurniData(this.props)
    }
    componentWillReceiveProps(newProps){
    //this._fetchFurnitureData(newProps)
    }
    _returnProductCardJsx(entireFurnitureList){
      let visiPro = this.state.visibleFurniture;
      // visiPro = this.props.;
      console.log(visiPro);

      let filFeatList = entireFurnitureList.filter(function(cardObj){
        if(visiPro === 'All'){
          return true
        }
        if(cardObj.onSale === true){
          return true
        } else {
          return false
        }

      })
      let forniCompLis = filFeatList.map((cardObj, i)=>{
        //console.log(this.props.visiPro)
        return <ProductId
        imgUrl={cardObj.imageLink}
        name={cardObj.item}
        price={cardObj.price}
        cat={cardObj.category}
        id={cardObj._id}
        onsale={cardObj.onSale}
        key={i}
          />
      })

      return forniCompLis
    }

    _hanProClick(clickedVal){
      this.setState({
        visibleFurniture : clickedVal
      })
    }

  render(){

    return (
      <section>
      <div className="all-products">
        <h2 className="titulo">All Products</h2>
        <h4 className="titulo1">All available listings</h4>
      </div>
      <div className="item2">
        <p>
        <span data-ptype="All" onClick={ ()=>{ this._hanProClick('All')}}><Link className="headers-list__red" to="#">All Items</Link></span>
        <span data-ptype="onSale" onClick={ ()=>{ this._hanProClick('Sale')}}><Link className="headers-list__red" to="#">On Sale</Link></span>
        </p>
        <p><span className="item-num">{this._returnProductCardJsx(this.state.furniList).length}</span>  Items Showing</p>
      </div>
        <div className="forniList">
          {this._returnProductCardJsx(this.state.furniList)}
        </div>

      <Footer footer = {headers}/>
      </section>
    );
  }
}

export default All_Products
