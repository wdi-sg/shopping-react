import React from 'react';
import {hot} from 'react-hot-loader';

class Result extends React.Component {
  render() {
    return (
      <li>{this.props.results.name} | {this.props.results.salePrice}</li>
    )
  }
}

export default hot(module)(Result);
