
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import axios from 'axios'
import Form from './search/searchall.jsx'
import ProductShow from './product/product.jsx'
import Cart from './cart/cart.jsx'
import Slider from "react-slick";
import 'bootstrap/dist/css/bootstrap.min.css';



  class App extends React.Component {

    constructor(){
      super()
      console.log("constructing");
    
      this.state = {
            products:[],
            cart: [],
            images: []
        }
      }

    setWord(currentWord){

        console.log("WOW!: "+currentWord)
        this.setState({word:currentWord})
    }

    render() {

        const myCallback = (product)=>{
             this.setState({products: product})
        }

        const addIntoCart = (product) =>{
          let array = this.state.cart
          array.push(product)
          this.setState({cart: array})
        }

        const imageCallback = (product)=>{
          this.setState({images : product})
        }

        const removeFromCart = (index) => {
          let array = this.state.cart
          array.splice(index, 1)
          this.setState({cart : array})
        }

        let cards;
        cards = this.state.images.map((product,index)=>{
          return(
              <div key = {index}>
                  <img src= {product.url} />
              </div>
          )
      })

      const settings = {
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };

        return (
        <div>
          <div class = "container-fluid">
            <Slider {...settings}>
              {cards}
            </Slider>
          </div>
           <div class="container">
              <div class="row">
                <div class="col-sm">
                  <h2>Search for Product</h2>
                  <Form productCallback = {myCallback} imageCallback = {imageCallback}/>
                </div>
            <div class="col-sm">
                  <h2>Products</h2>
                  <ProductShow productid = {this.state.products} addCart = {addIntoCart}/>
            </div>
            <div class="col-sm">
                <h2>Cart</h2>
                <Cart cartItem = {this.state.cart} removeItem = {removeFromCart} productCallback = {myCallback} />
            </div>
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
