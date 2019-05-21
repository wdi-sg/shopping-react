import React from 'react';
import { hot } from 'react-hot-loader';

import Search from './components/search/search';

class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    ajaxCall(searchString){
        // fetch('/')
    }

    render() {
        return (
            <div>
                <Search ajaxCall={this.ajaxCall}/>
            </div>
        );
    }
}

export default hot(module)(App);