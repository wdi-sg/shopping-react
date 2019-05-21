import React from 'react';
import { hot } from 'react-hot-loader';

import Counter from './components/counter/counter';
import Form from './components/form/form';

import Navbar from './components/home/navbar';
import Search from './components/search/search';
import SearchResults from './components/search/searchResults';
import DisplayProduct from './components/product/DisplayProduct';



class App extends React.Component {
    constructor() {
        super();
        this.state = {
          message: 'hello',
        };

        this.searchCallback = this.searchCallback.bind(this)
    }

    // take current product from search results (child) to the parent
    searchCallback(dataFromSearch) {
        this.setState({currentProduct: dataFromSearch});
        console.log("app ", this.state.currentProduct)
    }

  render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Search callbackFromApp={this.searchCallback} />
                </div>

                <div className="col">
                    <DisplayProduct currentProduct={this.state.currentProduct} />
                </div>

                <div className="col">
                </div>
            </div>
        </div>
    );
  }
}

export default hot(module)(App);