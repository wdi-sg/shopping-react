import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import axios from 'axios';
import Search from '../components/search';
import Product from '../components/product';
import Cart from '../components/cart';

export class App extends Component {

    constructor(){
        super()
        this.state = {
            products: [],
            product: [],
            cart: []
        }
    }

    setProducts = (events) => {
        this.setState({products: events})
    }

    getProduct = (productItem) => {
        this.setState({product: [productItem]})
    }

    getCart = (cartItem) => {
        this.setState({cart: [cartItem, ...this.state.cart]})
    }

    render() {
        return (
            <div className="container">
            <div className="row">
                <div className="col">
                <Search setProducts={(events) =>{this.setProducts(events)} } getProduct={(events) =>{this.getProduct(events)}} products={this.state.products}/>
                </div>
                <div className="col">
                <Product product={this.state.product} getCart={(events) => {this.getCart(events)}}/>
                </div>
                <div className="col">
                <Cart cartItem={this.state.cart}/>
                </div>
            </div>
            </div>
        );
    }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App/>,
    document.body.appendChild(document.createElement('div')),
  )
})