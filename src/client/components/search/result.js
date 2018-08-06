import React from 'react';
import {hot} from 'react-hot-loader';

import Product from '../product/product';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showProduct: false
    }
    this.showProduct = this.showProduct.bind(this);
  }

  showProduct() {
    this.setState({
      showProduct: true
    })
  }

  render() {
    return (
      <div>
        <li onClick={this.showProduct}>{this.props.results.name} | {this.props.results.salePrice}</li>
        {this.state.showProduct &&
          <Product product={this.props.results} />
        }
      </div>
    )
  }
}

export default hot(module)(Result);
