import React from 'react';
import {hot} from 'react-hot-loader';

import Cart from './components/cart/cart';
import Form from './components/form/form';
import Results from './components/results/results';
import Product from './components/product/product';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            message: 'hello world hehe?',
            query: '',
            products: [],
            product: {},
            cart: [],
            sort: '3'
        };
    }
    onSearchInputChange = (event) => {
        let searchInput = event.target.value;
        let newState = {query: searchInput};
        this.setState(newState);
    };
    onSelect = (event) => {
        let value = event.target.value;
        let newSort = '';
        let products = this.state.products;
        let newProducts = [];
        switch (value) {
            case '1': {
                //price
                newSort = '1';
                console.log('one selected');
                newProducts = products.sort((a, b) => {
                    let priceA = parseFloat(a.price.split('$')[1]);
                    let priceB = parseFloat(b.price.split('$')[1]);
                    return priceA - priceB;
                });
                break;
            }
            case '2': {
                //name
                newSort = '2';
                console.log('two selected');
                let mapped = products.map((product, index) => {
                    return {index: index, value: product.name.toLowerCase()};
                });
                mapped.sort((a, b) => {
                    if (a.value > b.value) {
                        return 1;
                    }
                    if (a.value < b.value) {
                        return -1;
                    }
                    return 0;
                });
                newProducts = mapped.map((item) => {
                    return products[item.index];
                });
                break;
            }
            case '3': {
                //none
                newSort = '3';
                console.log('three selected');
                this.setState({sort: newSort});
                this.onSearchSubmit();
                return;
            }
            default:
                break;
        }
        this.setState({sort: newSort, products: newProducts});
    };
    onSearchSubmit = () => {
        this.setState({sort: '3'});
        const query = this.state.query;
        // const url = '/products?query=' + query;
        const railsUrl = 'http://127.0.0.1:3000/products?query=' + query;
        // let context = this;
        fetch(railsUrl)
            .then((res) => {
                // console.dir(res);
                return res.json();
            })
            .then((myJson) => {
                let products = myJson.products;
                this.setState({products: products});
            });
        //   .then(function(response) {
        //     return response.json();
        //   })
        //   .then(function(myJson) {
        //     // console.log(JSON.stringify(myJson));
        //     let products = myJson.products;
        //     context.setState({products: products});
        //   });
    };
    onClickProduct = (event) => {
        let product = JSON.parse(event.target.attributes.value.value);
        // console.log(product);
        this.setState({product: product});
    };
    onClickCart = () => {
        let product = this.state.product;
        let cart = this.state.cart;
        cart.push(product);
        this.setState({cart: cart});
    };

    render() {
        return (
            <div className="row">
                <div className="col">
                    <Form
                        onChangeHandler={this.onSearchInputChange}
                        onClickHandler={this.onSearchSubmit}
                        onSelect={this.onSelect}
                        selectValue={this.state.sort}
                    />
                    <Results products={this.state.products} onClickProduct={this.onClickProduct} />
                </div>
                <div className="col">
                    <Product product={this.state.product} onClickHandler={this.onClickCart} />
                </div>
                <div className="col-5">
                    3rd col
                    <Cart cart={this.state.cart} />
                </div>
            </div>
        );
    }
}

export default hot(module)(App);
