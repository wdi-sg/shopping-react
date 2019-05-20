import React from 'react';

import styles from './style.scss';

import Search from '../search/search';

class Product extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <h4>Product</h4>
                <p>{this.props.currItem}</p>
            </div>
        );
    }
}

export default Product;