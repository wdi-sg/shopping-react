

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
            <div className = "col-8  pb-3">
            <p>Item: {product}
            </p>
          </div>
        <div className = "col-4 text-right pb-3">
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
        Product Total:
        </div>
        <div className = "col-4 text-right">
        $ {this.props.cartPriceArray.reduce((a, b) => a + b, 0).toFixed(2)}

        </div>
        <div className = "col-8">
        Delivery (Flat Rate):
        </div>
        <div className = "col-4 text-right">
        + $ 7
        </div>
        <div className = "col-8 border-bottom">
        GST:
        </div>
        <div className = "col-4 text-right border-bottom">
        +$ {(this.props.cartPriceArray.reduce((a, b) => a + b, 0)*0.07).toFixed(2)}

        </div>
        <div className = "col-8">
        <strong>
        Grandtotal:
        </strong>
        </div>
        <div className = "col-4 text-right ">
          <strong>
        $ {(this.props.cartPriceArray.reduce((a, b) => a + b, 0)*1.07 +7).toFixed(2)}
          </strong>
        </div>
    </div>
    );
  }
}

export default Cart;