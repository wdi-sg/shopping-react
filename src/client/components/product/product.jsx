import React from 'react';

import styles from './style.scss';

class Product extends React.Component {
    constructor(){
        super();
        this.state = {

        };
    }

    render() {
        console.log("Product at JSX",this.props.displayProduct)
        return(
            <div>
            <h4>show product </h4>
            </div>

            )
    }

}

export default Product;