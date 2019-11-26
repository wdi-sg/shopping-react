import React from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';


class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }
    inputChangeHandler(event) {
        console.log("HIIIIII", event.target.value)
        const url = 'products/search';

        let params = {
            params: {
                name: event.target.value
            }
        };



        axios.get(url, params)
            .then((response) => {

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
                    <li key={product.id}></li>
                    <li>Name: {product.name}</li>
                    <li>Description: {product.description}</li>
                    <li>price: ${product.price}</li>
                    <br />
                </ul>
            </div>);
        });

        return (
            <div>
                <h1>Hi from Search</h1>
                <input id="search" type="text" onChange={(event) => { this.inputChangeHandler(event) }} />
                {products}
            </div>
        );
    }
}

export default Search;
