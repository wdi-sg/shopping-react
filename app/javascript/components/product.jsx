import React from 'react'
import axios from 'axios';

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
            </div>
        );
    }
}

export default Product;