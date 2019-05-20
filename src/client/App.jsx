import React from 'react';
import { hot } from 'react-hot-loader';

import Search from './components/search/search';
import Product from './components/product/product';

class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="container">
                <div className="row">

                    <div className="col">
                      <Search />
                    </div>

                    <div className="col">
                      <Product
                      clickedItem={this.state.currItem}
                      />
                    </div>

                    <div className="col">
                      Cart
                    </div>

                </div>
            </div>
        );
    }
}

export default hot(module)(App);