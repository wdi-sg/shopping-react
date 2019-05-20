import React from 'react';
import { hot } from 'react-hot-loader';

import Search from './components/search/search';
import Product from './components/product/product';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      productToDisplay: {
        name: "",
        price: "",
        description: "",
        imageUrl: ""
      },
      productHidden: true
    };
    // this.displayProduct = this.displayProduct.bind(this);
  }

  displayProduct = (newProductToDisplay) => {
    this.setState({
      productToDisplay: newProductToDisplay,
      productHidden: false
    });
  }


  render() {
    return (
      <div className="d-flex flex-wrap justify-content-around">
        <Search onClickOnSearchResult={this.displayProduct} />
        <Product productToDisplay={this.state.productToDisplay} productHidden={this.state.productHidden}/>
      </div>
    );
  }
}

export default hot(module)(App);