import React from 'react'

class Cart extends React.Component{
    constructor(){
        super();
    }

    render(){
      // receiving products from Search.jsx
      console.log(this.props.checkout)
      const products = this.props.checkout.map((product) => {
        return(
            <p>{product.name}: ${product.price}</p>
        );
      })


      return(
          <div>
            <h3>Cart</h3>
            {products}
          </div>
        )
    }

}

export default Cart;