import React from 'react';

import styles from './style.scss';

class Product extends React.Component {
  constructor(props) {
    super(props);

  };


  render() {

    console.log('product', this.props.info)

    return (
      <div>
        <h2>{this.props.info.name}</h2>
          <img src={this.props.info.largeImage} />
        <div className="short-des">
          {this.props.info.longDescription}
        </div>
      </div>
    );
  }
}

export default Product;