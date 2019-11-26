import React from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Viewproduct from '../viewproduct/viewproduct'


class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [],
            selectedProduct: null
        }
        // console.log(selectedProduct);
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

    clickHandler(product) {
        this.setState({ selectedProduct: product });
        console.log("product clicked on is", this.state.selectedProduct)
    }

    render() {
        const products = this.state.products.map((product, index) => {
            return (<div>
                <ul>
                    <li key={product.id}></li>
                    <li>{product.name}</li>
                    <br />
                </ul>
            </div>);
        });

        return (
            <div>
                <h1>Search Stuff Man</h1>
                <input id="search" type="text" onChange={(event) => { this.inputChangeHandler(event) }} />
                {products}
                <Viewproduct product={products} onclick={() => { this.clickHandler(product) }} />
            </div>
        );
    }
}

export default Search;
