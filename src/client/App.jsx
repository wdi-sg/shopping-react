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
                // console.log('one selected');
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
                // console.log('two selected');
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
                // console.log('three selected');
                this.setState({sort: newSort});
                this.onSearchSubmit();
                return;
            }
            default:
                break;
        }
        this.setState({sort: newSort, products: newProducts});
    };
    railsShow = () => {
        const query = '3';
        const railsUrl = 'http://127.0.0.1:3000/family/' + query;
        // let context = this;
        fetch(railsUrl)
            .then((res) => {
                // console.dir(res);
                return res.json();
            })
            .then((response) => {
                console.log('Success:', JSON.stringify(response));
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };
    railsPost = () => {
        const railsUrl = 'http://localhost:3000/family';
        const data = {
            household: {
                name: 'lucy famiry',
                parents_attributes: {
                    0: {_destroy: false, name: 'greg', parent_type: 'father'},
                    1: {_destroy: false, name: 'lucy', parent_type: 'mother'}
                }
            }
        };
        fetch(railsUrl, {
            method: 'POST', // or 'PUT'
            mode: 'cors',
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                // console.log(res);
                // console.log(res.json());
                return res.json();
            })
            .then((response) => {
                console.log('Success:', JSON.stringify(response));
            })
            .catch((error) => {
                console.error('Error:', error);
            });
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
        let product = JSON.parse(event.target.parentElement.attributes.value.value);
        // console.log(product);
        this.setState({product: product});
    };
    onClickCart = () => {
        let product = this.state.product;
        let cart = this.state.cart;
        cart.push(product);
        this.setState({cart: cart});
    };
    deleteCartItem = (event) => {
        let indexToDelete = event.target.attributes.index.value;
        let newCart = this.state.cart;
        newCart.splice(indexToDelete, 1);
        this.setState({cart: newCart});
    };

    render() {
        return (
            <div className="row">
                <div onClick={this.railsPost} className="btn btn-primary">
                    Make Rails Post
                </div>
                <div onClick={this.railsShow} className="btn btn-primary">
                    Make Rails Show
                </div>
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
                    <Cart cart={this.state.cart} deleteCartItem={this.deleteCartItem} />
                </div>
            </div>
        );
    }
}

export default hot(module)(App);
