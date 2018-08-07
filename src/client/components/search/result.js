import React from 'react';
import {hot} from 'react-hot-loader';

class Result extends React.Component {
  render() {
    return (
      <div>
        <li onClick={() => this.props.showProduct(this.props.productId)}>{this.props.results.name} | {this.props.results.salePrice}</li>
      </div>
    )
  }
}

export default hot(module)(Result);
