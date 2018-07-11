import React, {Component} from 'react';
import request from 'superagent'
import ProductId from './ProductId.js'
import Footer from './Footer';
import { Link } from 'react-router-dom';

class All_Products extends Component {
  constructor(args){
    super(args)

    this.state ={
      furniList : []
    }
  }


  _fetchFurniData(compProps){
    let apiReqUrl='https://mallory-furniture-admin.now.sh/api/v1/products'

    if(typeof allProInRoute !== 'undefined'){
      apiReqUrl = `https://mallory-furniture-admin.now.sh/api/v1/all-products`
    }

    if(typeof featProInRoute !== 'undefined'){
      apiReqUrl = `https://mallory-furniture-admin.now.sh/api/v1/products?category=featured`
    }

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
    // this._fetchFurnitureData(newProps)
    }


    _renderCards(furniDataList){
      let forniCompLis = this.state.furniList.map((cardObj, i)=>{
        // console.log(fornitureObj)
        return <ProductId
          imgUrl={cardObj.imageLink}
          name={cardObj.item}
          price={cardObj.price}
          key={i}
          />
      })

      return forniCompLis
    }

  render(){

    return (
      <section>
      <div className="all-products">
        <h2 className="titulo">All Products</h2>
        <h4 className="titulo1">All available listings</h4>
      </div>
      <div className="item2">
        <p><Link className="headers-list__red" to="/All-Products">All Items</Link>
        <Link className="headers-list__red" to="/All-Products">On Sale</Link></p>
        <p><span className="item-num">{this.state.furniList.length}</span>  Items Showing</p>
      </div>
        <div className="forniList">
          {this._renderCards(this.state.furniList)}
        </div>

      <Footer />
      </section>
    );
  }
}

export default All_Products
