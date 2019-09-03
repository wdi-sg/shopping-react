import React from 'react';

import PropTypes from 'prop-types';

import styles from './style.scss';
import main_styles from '../../style.scss';

class Product extends React.Component {
    constructor(){
      super()
      this.state={

      }
    }
    render() {
    return (
      <div className={main_styles.panel}>Product
        <div>
          Product Image
        </div>
        <div>
          <p>Item Name</p>
          {this.props.item.name}
        </div>
        <div>
          <p>Item Description</p>
          {this.props.item.description}
        </div>
        <div>
          <p>Item Price</p>
          {this.props.item.price}
        </div>
        <div>
          <button onClick={this.props.toCart.bind(this,this.props.item)}>Add to cart</button>
        </div>
      </div>
    );
  }
}



export default Product;
