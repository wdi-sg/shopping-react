import React from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }

    getProducts() {
        console.log("retrieving products!!!")
        const url = '/products.json';

        axios.get(url)
            .then((response) => {
                console.log(response.data);
                const data = response.data

                this.setState({ products: data })

            }).catch((error) => {
                console.log(error);
            })
    }
    render() {
        const products = this.state.products.map((product, index) => {
            return (<div>
                <ul>
                    <li>Name: {product.name}</li>
                    <li>Description: {product.description}</li>
                    <br />
                </ul>
            </div>);
        });
        return (
            <div>
                <h1>Welcome to this budget Amazon, which runs on rails.</h1>
                <button onClick={() => { this.getProducts() }}>
                    Click to See All Products
                </button>
                {products}
            </div>
        );
    }
}

export default App;
