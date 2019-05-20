import React from 'react';
import { hot } from 'react-hot-loader';

import Counter from './components/counter/counter';
import Form from './components/form/form';
import Product from './components/product/product';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'hellod',
      product: {name: '', price: '', description: ''}

    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(selectedProduct) {
    // this.setState({ product: selectedProduct.products[0].name })
    //console.log(selectedProduct.products[0].name)
    console.log("logging selected prod" + selectedProduct.name);

    this.setState(prevState => ({
    product: {
        ...prevState.product,
        name: selectedProduct.name,
        price: selectedProduct.price,
        description: selectedProduct.description
    }
    }))
  }

  render() {


    return (
      <div className="row">
        <div className="col-3">
            <Form onChange={this.handleChange}/>
            Welcome.
            <Counter message={this.state.message} />
        </div>
        <div className="col-6">
            <Product name={this.state.product.name} price={this.state.product.price} description={this.state.product.description} />
        </div>
      </div>
    );
  }
}

export default hot(module)(App);