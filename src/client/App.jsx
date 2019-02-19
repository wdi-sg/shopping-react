import React from 'react';
import { hot } from 'react-hot-loader';
import Form from './components/form/form';
import Results from './components/results/results';
const axios = require('axios');

class App extends React.Component {
    constructor() {
        super();
        this.search = this.search.bind(this);
        this.state = {
            results: ''
        };
    }

    search(searchKey){
        axios.get('/query', {
            params: {
                searchKey: searchKey
            }
        })
        .then(results => {
            console.log(results)
            this.setState({
                results: results
            });
        })
        .catch(error => {
            return error;
        })
    }

    render() {
        return ( 
                <div className="row w-100 m-0">
                    <div className="col-4 border border-dark">
                        <Form
                            search={ this.search }
                        />
                        <Results
                            results={ this.state.results }
                        />
                    </div>
                    <div className="col-4 border border-dark">
                        One of three columns
                    </div>
                    <div className="col-4 border border-dark">
                        One of three columns
                    </div>
                </div>

        );
    }
}

export default hot(module)(App);