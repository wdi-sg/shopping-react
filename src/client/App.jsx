import React from 'react';
import { hot } from 'react-hot-loader';

import Search from './components/search/search';

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

                    <div class="col">
                      Product
                    </div>

                    <div class="col">
                      Cart
                    </div>

                </div>
            </div>
        );
    }
}

export default hot(module)(App);