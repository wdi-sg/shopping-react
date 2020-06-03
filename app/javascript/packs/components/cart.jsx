

import React from 'react';
import axios from 'axios';

class Cart extends React.Component {
        constructor(){
      super();



      // set the default value
      this.state = {
             cartItem:[""],
             cartPrice:[],
             products :[],
            clicked: false,
            productSearch:""
      };
    }

    // our click method









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
        $ {this.props.cartPriceArray.reduce((a, b) => a + b, 0).toFixed(2)}
        </div>
    </div>
    );
  }
}

export default Cart;