

import React from 'react';
import axios from 'axios';

class Cart extends React.Component {
        constructor(){
      super();



      // set the default value
      this.state = {
             //cartItem:[""],
             //cartPrice:[],
             products :[],
            clicked: false,
            productSearch:""
      };
    }

    // our click method


removeCartItem(event)
{
    console.log(event.target.id);
    this.props.callBackFromDeleteCartItem(event.target.id);
}






  render() {
        let john = []

            console.log("I am in");




        console.log(john)
        const products = this.props.cartProductArray.map((product, index)=>{
          console.log(product);
          return (
            <React.Fragment key={index}>
            <div className = "col-8 border">
            <p>Item: {product}
            </p>
          </div>
        <div className = "col-4 border">
            <p>Price: ${this.props.cartPriceArray[index]}
            </p>
            <button id={index} ref="inputBox" onClick={(event)=>{this.removeCartItem(event)}}>Remove</button>
          </div>
          </React.Fragment>
          );
        });
    return (
    <div className = "row">

            {products}
        <div className = "col-8">
        Total Cost:
        </div>
        <div className = "col-4">
        Subtotal: $ {this.props.cartPriceArray.reduce((a, b) => a + b, 0).toFixed(2)}

        </div>
        <div className = "col-8">
        Delivery (Flat Rate):
        </div>
        <div className = "col-4 text-right pr-5">
        + $ 7
        </div>
        <div className = "col-8">
        GST:
        </div>
        <div className = "col-4 text-right pr-5">
        +$ {(this.props.cartPriceArray.reduce((a, b) => a + b, 0)*0.07).toFixed(2)}

        </div>
        <div className = "col-8">
        Grandtotal:
        </div>
        <div className = "col-4 text-right pr-5">
        $ {(this.props.cartPriceArray.reduce((a, b) => a + b, 0)*1.07 +7).toFixed(2)}

        </div>
    </div>
    );
  }
}

export default Cart;