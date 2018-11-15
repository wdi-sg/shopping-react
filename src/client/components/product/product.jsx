import React from 'react';

import styles from './style.scss';

class Product extends React.Component {
    constructor(){
        super();
        this.state = {

        };
    }

    render() {
        // console.log("FUNC: ", this.props.cartItem);
        console.log("Product at JSX",this.props.displayProduct);
        //console.log("Product id",itemId); {Object.keys(myproduct).length !== 0 && (
        let myproduct = this.props.displayProduct;

        return(
            <div className={styles.displayProduct}>
                <div>
                <h4>{myproduct.name}</h4>
                <img src={myproduct.largeImage} />
                <p>{myproduct.shortDescription}</p>
                <p>Sales Price: ${myproduct.salePrice} | Original Price: ${myproduct.msrp}</p>
                <button onClick={()=>this.props.cartItem(myproduct)}>add to cart</button>
                </div>
            </div>

            )
    }

}

export default Product;