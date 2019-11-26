import React from 'react'

class Cart extends React.Component{
    constructor(){
        super();
    }

    render(){
      // receiving products from Search.jsx
      console.log(this.props.checkout)
      let subtotal = 0;
      const products = this.props.checkout.map((product) => {

        subtotal += parseFloat(product.price);
        return(
          <div>
            <p>{product.name}: ${product.price}</p>
          </div>
        );
      })


      return(
          <div>
            <h3>Cart</h3>
            {products}
            <hr/>
            <strong>Subtotal: {subtotal.toFixed(2)}</strong>
          </div>
        )
    }

}

export default Cart;