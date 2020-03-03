import React from 'react';
import axios from 'axios';

class Products extends React.Component {


    updateCart() {
        let number = event.target.value;
        console.log(number);
    }

    render() {
    const {selectedProduct, productId} = this.props
        return (
            <div>
                <h3>Product name is: {selectedProduct ? selectedProduct.name : ""}</h3>
                <h3>Price is: {selectedProduct ? selectedProduct.price : ""}</h3>
                <h3>Description is: {selectedProduct ? selectedProduct.description : ""}</h3>
                <div>{selectedProduct ? <button value={productId} onClick={e => {
                        this.props.sendToCart(e.target.value)
                    }}>Add to cart</button> : ""}</div>
                </div>
            )
    }
}


export default Products;