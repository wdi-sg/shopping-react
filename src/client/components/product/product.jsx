import React from 'react';
// import styles from './style.scss';
// import PropTypes from 'prop-types';

class Product extends React.Component {

    getImage(){
        if (!this.props.product.largeImage){
            return (
                <h3>No Image</h3>
            )
        } else {
            return (
                <img 
                    src={ this.props.product.largeImage }
                    className="w-50"
                />
            )
        }
    }
    
    getShortDescription(){
        if (!this.props.product.shortDescription){
            return ( 
                'This product does not have a description'
            )
        } else {
            return (
                <div className="text-justify mt-4">
                    { this.props.product.shortDescription }
                </div>
            );
        }
    }

    getPrice(){
        if (!this.props.product.salePrice){
            return 
        } else {
            return (
                <h3 className="pt-4">
                    <strong>
                        {'$' + parseFloat(this.props.product.salePrice).toFixed(2)}
                    </strong>
                </h3>
            )
        }
    }

    render(){
        return (
            <div
                className="text-center w-100 p-4"
            >
                { this.getImage() }
                { this.getPrice() }
                { this.getShortDescription() }
                <button className="mt-4">
                    Add To Cart
                </button>
            </div>
        )
    }
}
export default Product;