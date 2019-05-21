import React from 'react';
import { hot } from 'react-hot-loader';

import Search from './components/search/search';
import Product from './components/product/product';
import Cart from './components/cart/cart';

class App extends React.Component {
    constructor() {
        super();

        this.ajaxTimeout = null;
        this.state = {
            cart: [],
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

    sortProductByPriceHandler() {
        let newProducts = [...this.state.products];

        newProducts.sort((a, b) => {
            a = Number(a.price.replace("$", ''));
            b = Number(b.price.replace("$", ''));

            return a - b;
        });

        this.setState({ products: newProducts });
    }

    selectProductHandler(e) {
        let product = this.state.products.find( (item) => {
            return item.id.toString() === e.target.id;
        });

        this.setState( { selectedProduct: product } );
    }

    addProductToCartHandler(e) {
        let newCart = [...this.state.cart];
        let newProduct = {...this.state.selectedProduct}
        newCart.push(newProduct);

        this.setState( { cart: newCart } );
    }

    removeProductToCartHandler(e) {
        let newCart = this.state.cart.filter( (item) => {
            return item.id.toString() !== e.target.id;
        });

        this.setState( { cart: newCart } );
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Search
                            products= { this.state.products }
                            sortProductByPriceHandler= { () => { this.sortProductByPriceHandler() } }
                            searchProductsHandler= { (e) => { this.searchProductsHandler(e.target.value) } }
                            selectProductHandler= { (e) => { this.selectProductHandler(e) } }
                        />
                    </div>

                    <div className="col-4">
                        <Product
                            selectedProduct = { this.state.selectedProduct }
                            addProductToCartHandler= { (e) => { this.addProductToCartHandler(e) } }
                        />
                    </div>

                    <div className="col-4">
                        <Cart
                            cart = { this.state.cart }
                            removeProductToCartHandler= { (e) => { this.removeProductToCartHandler(e) } }
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default hot(module)(App);