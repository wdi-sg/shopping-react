import React from 'react';
import { hot } from 'react-hot-loader';
import Form from './components/form/form';
import Results from './components/results/results';
import Product from './components/product/product';
const axios = require('axios');

class App extends React.Component {
    constructor() {
        super();
        this.search = this.search.bind(this);
        this.setProduct = this.setProduct.bind(this);
        this.state = {
            results: '',
            product: null
        };
    }

    search(searchKey, sortBy){
        console.log('searching')
        axios.get('/query', {
            params: {
                query: searchKey,
                sort: sortBy,
            }
        })
        .then(results => {
            this.setState({
                results: results
            });
        })
        .catch(error => {
            return error;
        })
    }

    setProduct(product){
        this.setState({
            product: product
        })
    }

    displayProduct(){
        if (this.state.product){
            return (
                <Product
                    product={ this.state.product }
                />
            )
        }
    }

    render() {
        return ( 
                <div className="row w-100 m-0 vh-100">
                    <div className="col-4 border border-dark h-100 overflow-auto">
                        <Form
                            search={ this.search }
                        />
                        <Results
                            results={ this.state.results }
                            setProduct={ this.setProduct }
                        />
                    </div>
                    <div className="col-4 border border-dark h-100 m-0 p-0">
                        { this.displayProduct() }
                    </div>
                    <div className="col-4 border border-dark h-100 m-0 p-0">
                        One of three columns
                    </div>
                </div>

        );
    }
}

export default hot(module)(App);