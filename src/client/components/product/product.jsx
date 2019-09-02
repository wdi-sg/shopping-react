import React from 'react';

import styles from './style.scss';

class Product extends React.Component {

    addProductToCart() {
        this.props.addProductToCart();
    }

    render() {
            let productInfo = (this.props.product.name) ?
                (
                    <div>
                    <p></p>
                    <h6>Product Name</h6>
                    <p>{this.props.product.name}</p>
                    <h6>Product Description</h6>
                    <p>{this.props.product.description}</p>
                    <h6>Product Price</h6>
                    <p>{this.props.product.price}</p>
                    <button onClick={()=>this.addProductToCart()}>Add to Cart</button>
                    </div>
                ) : "";
        return (
            <div className = {styles.product_container} >
            <h3>Product</h3>
            {productInfo}
            </div>
        );
    }
}

export default Product;
