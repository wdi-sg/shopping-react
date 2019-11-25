import React from 'react';
import styles from './style';

class Product extends React.Component {

    render() {

        let product = this.props.product;
        let name = '';
        let description = '';

        if (product) {
            name = product.name;
            description = product.description;
        }

        return (
            <div className={styles.product}>
                <h1>Product</h1>
                <p>{name}</p>
                <p>{description}</p>
                <button>add to cart</button>
            </div>
        );
    }

}

export default Product;