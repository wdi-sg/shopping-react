import React from 'react';
import { hot } from 'react-hot-loader';

import Search from './components/search/search';
import Display from './components/display/display';
import NewProduct from './components/newProduct/newProduct';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'hello',
      products: [],
      singleitem: {}
    };

    this.addNewProduct = this.addNewProduct.bind(this);
  }

  addNewProduct(product){
    this.setState({products:[product,...this.state.products]})
  }

  receivingInput = (input) => {
    this.setState({singleitem: input});
  }

  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-4">
                <Search receivingInput={(input)=> { this.receivingInput(input)}}/>
            </div>
            <div className="col-4">
                <div className="row mb-5">
                    <Display input={this.state.singleitem}/>
                </div>
                <div className="row mt-5">
                    <NewProduct addNewProduct={this.addNewProduct}/>
                </div>
            </div>
            <div className="col-4">
            </div>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);