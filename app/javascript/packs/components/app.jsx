

import React from 'react';
import axios from 'axios';
import Product from './product'
import Form from './form'
import Cart from './cart'


class App extends React.Component {
        constructor(){
      super();



      // set the default value
      this.state = {
             products:[],
            clicked: false,
            productSearch:"",
            cartId:"",
            cartProductArray: [],
            cartPriceArray: []

      };
    }



  render() {
    // our click method
 const changeHandler = event => {
    //console.log(`Target value ${event.target.value}`)
        this.setState({productSearch:event.target.value});
        //console.log(`Target value is ${event.target.value}`)
        //console.log(testValue)
        //console.log(datafile)
    };
    const handleClick = event =>{
        //console.log(testValue)

    };
    const handleCartClick = event =>{
        //console.log(testValue)
        console.log(event)
        this.setState({cartId:parseInt(event)});
    };
    const data = event =>{
        //console.log(event)
        //console.log("Something Something Something")
        this.setState({products:event})
    }
    const cartProductArray = event =>{
        this.setState({cartProductArray: event})
    }

    const cartPriceArray = event =>{
        this.setState({cartPriceArray: event})

    }

    return (
    <div className = "row align-items-stretch">
        <div className="col-4 px-5">
         <Form
        callBackFromForm = {changeHandler.bind(this)}
        clickFormButton = {handleClick}
        productArray = {data}

        />
        </div>
        <div className = "col-4 px-5">
        <Product
            productData = {this.state.products}
            testType = {this.state. productSearch}
            clickCartButton = {handleCartClick}
            cartProductArray = {cartProductArray}
            cartPriceArray ={cartPriceArray}

        />
        </div>

        <div className = "col-4 px-5">
     <Cart
            cartProductArray = {this.state.cartProductArray}
            cartPriceArray = {this.state.cartPriceArray}
        />
        </div>

    </div>
    );
  }
}

export default App;