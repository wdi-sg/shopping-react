import React from 'react';
import { hot } from 'react-hot-loader';

import Search from './components/search/search';
import Product from './components/product/product';
import Cart from './components/cart/cart';

import styles from './styles.scss'

class App extends React.Component {
    constructor() {
        super();

        this.ajaxTimeout = null;

        this.state = {
            cart: [],
            displayCart: false,
            products: [],
            selectedProduct: null,
        };
    }

    searchProductsHandler(searchString) {
        if (searchString.length > 3 && searchString.trim() !== "") {
            clearTimeout(this.ajaxTimeout);
            this.ajaxTimeout = setTimeout(() => { this.doAjaxCall(searchString) }, 250);

        } else {
            this.setState( { products: [] } );
        }
    }

    async doAjaxCall(searchString) {
        const response = await fetch(`/products?query=${ searchString }`);
        const data = await response.json();

        this.setState({ products: data.products });
    }

    sortProductByPriceAscHandler() {
        let newProducts = [...this.state.products];

        newProducts.sort((a, b) => {
            a = Number(a.price.replace("$", ''));
            b = Number(b.price.replace("$", ''));

            return a - b;
        });

        this.setState({ products: newProducts });
    }

    sortProductByPriceDescHandler() {
        let newProducts = [...this.state.products];

        newProducts.sort((a, b) => {
            a = Number(a.price.replace("$", ''));
            b = Number(b.price.replace("$", ''));

            return b - a;
        });

        this.setState({ products: newProducts });
    }

    selectProductHandler(e) {
        let product = this.state.products.find( (item) => {
            return item.id.toString() === e.target.id;
        });

        this.setState( { selectedProduct: product } );
    }

    addProductToCartHandler() {
        let newCart = [...this.state.cart];
        let newProduct = {...this.state.selectedProduct}
        newCart.push(newProduct);

        this.setState({
            cart: newCart,
            displayCart: true
        });
    }

    removeProductToCartHandler(e) {
        let newCart = this.state.cart.filter( (item) => {
            return item.id.toString() !== e.target.id;
        });

        this.setState( { cart: newCart } );
    }

    hideCartHandler() {
        this.setState( { displayCart: false } );
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className= {styles.search + " col-4"}>
                            <Search
                                products= { this.state.products }
                                sortProductByPriceAscHandler= { () => { this.sortProductByPriceAscHandler() } }
                                sortProductByPriceDescHandler= { () => { this.sortProductByPriceDescHandler() } }
                                searchProductsHandler= { (e) => { this.searchProductsHandler(e.target.value) } }
                                selectProductHandler= { (e) => { this.selectProductHandler(e) } }
                            />
                        </div>

                        <div className= {styles.product + " col-8"}>
                            <Product
                                selectedProduct = { this.state.selectedProduct }
                                addProductToCartHandler= { (e) => { this.addProductToCartHandler(e) } }

                            />
                        </div>
                    </div>
                </div>

                <div>
                    <Cart
                        cart = { this.state.cart }
                        hideCartHandler= { () => { this.hideCartHandler() } }
                        removeProductToCartHandler= { (e) => { this.removeProductToCartHandler(e) } }
                        displayCart = {this.state.displayCart }
                    />
                </div>
            </div>
        );
    }
}

export default hot(module)(App);