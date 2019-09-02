import React from 'react';
import { hot } from 'react-hot-loader';

import Search from './components/search/search';
import Product from './components/product/product';
import Cart from './components/cart/cart';
import style from './style.scss';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            product: {},
            cart: [],
            sortPrice: true,
        };

    this.removeProductFromCart=this.removeProductFromCart.bind(this);
    this.addProductToCart=this.addProductToCart.bind(this);
    this.displayProduct=this.displayProduct.bind(this);
    this.searchDatabase=this.searchDatabase.bind(this);
    this.sortData=this.sortData.bind(this);

    }

    removeProductFromCart(event) {
        let index = event.currentTarget.dataset.index;
        this.state.cart.splice(index,1);
        this.setState({cart:this.state.cart});
    }

    addProductToCart(){
        this.state.cart.push(this.state.product);
        this.setState({cart:this.state.cart});
        }

    displayProduct(event) {
        let productId = event.currentTarget.dataset.id;
        let index = this.state.data.findIndex(product => product.id === parseInt(productId) );
        this.setState({ product: this.state.data[index]});
    }

    sortData() {
        let allProducts = this.state.data;
        if (this.state.sortPrice) {
            allProducts.sort( (a,b) => (a.price > b.price) ? 1 : -1 );
        } else {
            allProducts.sort( (a,b) => (a.price < b.price) ? 1 : -1 );
        }
        this.setState({data:allProducts});
        this.setState({sortPrice: !this.state.sortPrice});
    }

    searchDatabase() {
        const reactComponent = this;

        var responseHandler = function() {
            //console.log("AJAX success");
            const result = JSON.parse(this.responseText);

            reactComponent.setState({ data:result.products });
            console.log(reactComponent.state);
        };

        var request = new XMLHttpRequest();
        request.addEventListener("load", responseHandler);
        request.open("GET", "./products");
        request.send();
        // fetch("./products")
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             result = JSON.parse(result);
        //             this.setState({
        //             isLoaded: true,
        //             products: result.products
        //           });
        //     },
        //
        //     (error) => {
        //         this.setState({
        //             isLoaded: true,
        //             error
        //         });
        //     }
        // )
    }


    render() {
    return (
        <div id={style.main_container}>
            <Search searchDatabase={this.searchDatabase} displayProduct={this.displayProduct} data={this.state.data} sortData={this.sortData} sortPrice={this.state.sortPrice}/>
            <Product product={this.state.product} addProductToCart={this.addProductToCart} />
            <Cart cart={this.state.cart}  removeProductFromCart={this.removeProductFromCart}/>
        </div>
    );
    }
}

export default hot(module)(App);
