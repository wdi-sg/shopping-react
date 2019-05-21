import React from 'react';
import { hot } from 'react-hot-loader';
import Search from './components/search/search';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            products: [],
            request: new XMLHttpRequest(),
        };
    }

    searchHandler(e) {
        // the reason for this variable is because loadRequestHandler is unable to access react .this within its scope
        const reactState = this;

        const loadRequestHandler = function () {
            const data = JSON.parse( this.responseText );
            reactState.setState( { products: data.products } );
        }

        if (e.target.value.length > 3 ) {
            this.state.request.addEventListener("load", loadRequestHandler);
            this.state.request.open("GET", "http://localhost:3000/products?query=" + e.target.value);
            this.state.request.send();
            // const ajaxCall = setTimeout(() => { this.req.send(); }, 1000);
            console.log("fire!");
        }
    }

    render() {
        return (
            <div>
                <Search
                    searchHandler= { (e) => { this.searchHandler(e) } }
                    products={ this.state.products }/>
            </div>
        );
    }
}

export default hot(module)(App);