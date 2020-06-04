import React from 'react';

import Search from './Search';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {searchResults: []};
    }

    setResults(searchResults) {
        this.setState({searchResults})
    }

    render() {
        return (
            <div>
                <h1>Shopping Cart</h1>
                <Search setResults={r => {this.setResults(r)}} searchResults={this.state.searchResults} />
            </div>
        );
    }
}