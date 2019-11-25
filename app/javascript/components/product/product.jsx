import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';



class Product extends React.Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }

    getProducts() {


        const url = '/products.json';

        const whenDone = (response) => {
            const data = response.data
            this.setState({ products: data })
            console.log("WOW DATA", data);
            // if data.lenght > 2000
        }

        const whenError = (error) => {
            console.log(error);
        };

        axios.get(url)
            .then(whenDone)
            .catch(whenError)
    }
    render() {
        // console.log("this.state", this.state.products)
        const products = this.state.products.map((product) => {
            return (<div>
                <li>
                    {product.name}
                    {product.description}
                </li>
            </div >);
        });

        return (
            <div>
                <h1>All our products are below</h1>
                <button onClick={() => { this.getProducts() }}>
                    see all products
                    </button>
                {products}
            </div >
        );
    }
}

export default Product;
