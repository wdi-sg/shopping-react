import React from 'react';
import styles from './style';

class Product extends React.Component {

    render() {
        return (
            <div className={styles.product}>
                <h1>Product</h1>
                <p>image</p>
                <p>description</p>
                <p>price</p>
                <button>add to cart</button>
            </div>
        );
    }

}

export default Product;