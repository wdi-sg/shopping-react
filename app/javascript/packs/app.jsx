// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import axios from 'axios'
import Form from './search/searchall.jsx'
import ProductShow from './product/product.jsx'
import Cart from './cart/cart.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';



  class App extends React.Component {

    constructor(){
      super()
      console.log("constructing");
    
      this.state = {
            products:[],
            cart: [],
        }
      }

    setWord(currentWord){

        console.log("WOW!: "+currentWord)
        this.setState({word:currentWord})
    }

    render() {
        const myCallback = (product)=>{
             this.setState({products: product})
             console.log(this.state.products)
        }

        const addIntoCart = (product) =>{
          let array = this.state.cart
          array.push(product)
          this.setState({cart: array})
             console.log(this.state.cart)
        }

        return (
           <div class="container">
              <div class="row">
                <div class="col-sm">
                  <h2>Search for Product</h2>
                  <Form productCallback = {myCallback}/>
                </div>
            <div class="col-sm">
                  <h2>Products</h2>
                  <ProductShow productid = {this.state.products} addCart = {addIntoCart}/>
            </div>
            <div class="col-sm">
                <h2>Cart</h2>
                <Cart cartItem = {this.state.cart}/>
            </div>
          </div>
        </div>
        );
    }
}

export default App;



document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})
