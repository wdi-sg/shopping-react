import React from 'react';
import { hot } from 'react-hot-loader';
import Search from './components/search/search';

class App extends React.Component {
    constructor() {
        super();

        this.ajaxTimeout = null;
        this.state = {
            products: []
        };
    }

    searchHandler(searchString) {
        if (searchString.length > 3 ) {
            clearTimeout(this.ajaxTimeout);
            this.ajaxTimeout = setTimeout(() => { this.doAjax(searchString) }, 500);

        } else {
            this.setState( { products: [] } );
        }
    }

    async doAjax(searchString) {
        const response = await fetch(`/products?query=${ searchString }`);
        const data = await response.json();

        this.setState({ products: data.products });
    }

    render() {
        return (
            <div>
                <Search
                    searchHandler= { (e) => { this.searchHandler(e.target.value) } }
                    products={ this.state.products }/>
            </div>
        );
    }
}

export default hot(module)(App);