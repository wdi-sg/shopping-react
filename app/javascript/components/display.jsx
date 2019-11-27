import React from 'react'

class Display extends React.Component{
    constructor(){
        super();
    }

    render(){
      // receiving products from Search.jsx
      const product = this.props.product

      return(
          <div>
            <h3>Product Details</h3>
            <img src={product.image_url} />
            <p>Product: {product.name}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => { this.props.addCart() }}>
              Add to Cart
            </button>
            <p>Description: {product.description}</p>
          </div>
      );
    }

}

export default Display;