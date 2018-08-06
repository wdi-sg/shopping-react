import React from 'react';

import styles from './style.scss';

class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      products: ['hello', 'heyho']
    };
  }

  componentDidMount = async () => {
    const response = await fetch('http://localhost:3000/api/query?search=' + this.props.query);
    const data = await response.json();
    this.setState({products: data});
  };

  render() {
    let {products} = this.state;
    products = products.map((product) => <div>{product}</div>);

    return (
      <div>
        <div>{products}</div>
      </div>
    );
  }
}

export default Product;
