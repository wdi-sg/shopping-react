import React from 'react';
import { hot } from 'react-hot-loader';
import Form from './components/form/form';
const axios = require('axios');

class App extends React.Component {
    constructor() {
        super();
        this.search = this.search.bind(this);
        this.state = {
            message: 'hello',
        };
    }

    search(searchKey){
        axios.get('/query', searchKey)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error)
        })
        .then(() => {
            console.log('done')
        })
    }

    render() {
        return ( 
            <Form
                search={ this.search }
            />
        );
    }
}

export default hot(module)(App);