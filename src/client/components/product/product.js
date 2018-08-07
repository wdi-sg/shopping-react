import React from 'react';
import {hot} from 'react-hot-loader';

class Product extends React.Component {
  render() {
    return(
      <div id='product'>
        <img src={this.props.product.mediumImage} />
        <p>
          {this.props.product.shortDescription}
        </p>
        <p>
          {this.props.product.salePrice}
        </p>
        <button type="button" onClick={() => this.props.addToCart(this.props.product)}>Add To Cart</button>
      </div>
    )
  }
}

export default hot(module)(Product);
