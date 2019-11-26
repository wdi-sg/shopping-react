import React from 'react'

class Product extends React.Component{
    constructor(){
        super();
    }

    render() {

        return(
            <div>
                <h3>Product Details</h3>
                <img src={this.props.product.url} />
                <p>Name: {this.props.product.name}</p>
                <p>Description: {this.props.product.description}</p>
                <p>Price: ${this.props.product.price}</p>
                <button onClick={() => {this.props.addCart()}}>Add to Cart</button>
            </div>
        );
    }
}

export default Product;