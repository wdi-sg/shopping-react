import React from 'react'

import Search from '../components/search'
import Display from '../components/display'
import Cart from '../components/cart'

export default class App extends React.Component {

    constructor(){
        super()
        this.state = {
            products: [],
            selectedProduct: {},
            cart: []
        }
    }

    allProductsLifter(products){
        this.setState({products: products})
    }

    singleProductLifter(product){
        this.setState({selectedProduct: product})
    }

    selectionToCartLifter(product){
        this.setState({cart: [product, ...this.state.cart]})
    }

    render(){
        return(
            <div className="row">
                <div className="col-4">
                    <Search products={this.state.products} allProductsLifter={(e)=>{this.allProductsLifter(e)}} singleProductLifter={(e)=>{this.singleProductLifter(e)}}/>
                </div>

                <div className="col-4">
                    <Display product={this.state.selectedProduct} selectionToCartLifter={(e)=>{this.selectionToCartLifter(e)}}/>
                </div>

                <div className="col-4">
                    <Cart cart={this.state.cart}/>
                </div>

            </div>
        )
    }
}