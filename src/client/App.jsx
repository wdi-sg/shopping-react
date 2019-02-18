import React from 'react';
import { hot } from 'react-hot-loader';

import Counter from './components/counter/counter';
import Form from './components/form/form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: {},
    };

    this.productData = this.productData.bind(this);
  }

  productData(data) {
    this.setState({ selectedProduct: data });
    console.log(this.state.selectedProduct)
  }

  render() {
    return (
      <div className="row">
        <Form onChange={this.productData}/>
        <Counter product={this.state.selectedProduct} />
      </div>
    );
  }
}

export default hot(module)(App);