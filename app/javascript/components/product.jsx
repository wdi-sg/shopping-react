import React from 'react'
import axios from 'axios';

class Product extends React.Component {
    constructor() {
        super()
    }

    addToCart(){
        this.props.addToCart()
    }

      render() {

        let product = '';
        if(Object.keys(this.props.product).length !== 0){
             product = (
                            <div>
                                <h1>{this.props.product.name}</h1>
                                <img src={this.props.product.image_url}/>
                                <p>{this.props.product.description}</p>
                                <p>${this.props.product.price}</p>
                            </div>)
        }

    return (
      <div>
      {product}
      <button onClick={ (e)=>{ this.addToCart(e) } }>Add to cart</button>
      </div>
    );
  }
}

export default Product;