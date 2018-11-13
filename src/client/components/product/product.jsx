import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

class Product extends React.Component {
  constructor() {
    super();
  }

  render(){
    console.log("THIS.PROPS IN PRODUCTTTTTT: ", this.props.requiredProduct);
    return(
        <div>
            <h3>Product description</h3>
            <img src={this.props.requiredProduct.mediumImage} />
            <p>Description: {this.props.requiredProduct.name}</p>
            <p>Price: {this.props.requiredProduct.salePrice}</p>
        </div>
    )

  }

}

Product.propTypes = {
  requiredProduct: PropTypes.object.isRequired
}
export default Product;

