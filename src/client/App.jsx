import React from 'react';
import { hot } from 'react-hot-loader';

import Counter from './components/counter/counter';
import Form from './components/form/form';

import Search from './components/search/search';
import DisplayProduct from './components/product/displayProduct';
import DisplayCart from './components/cart/displayCart';
import SubTotal from './components/cart/subtotal';



class App extends React.Component {
    constructor() {
        super();
        this.state = {
            cartItems: []
        };

        this.searchCallback = this.searchCallback.bind(this);
        this.handleClickFromApp = this.handleClickFromApp.bind(this);
        this.handleAddToCart = this.handleAddToCart.bind(this);
    }

    handleClickFromApp(e) {
        //console.log(e.target.innerHTML);
        let searchResults = this.state.searchResults;

        let currentObj = searchResults.find(x => x.name === e.target.innerHTML)
        this.setState({currentProduct: currentObj})
    }

    // take current product from search results (child) to the parent
    searchCallback(dataFromSearch) {
        this.setState({searchResults: dataFromSearch});
    }

    handleAddToCart() {
        let currentObj = this.state.currentProduct;

        const cartItems = [...this.state.cartItems]

        //let cartItems = this.state.cartItems;
        cartItems.push(currentObj)
        this.setState({cartItems: cartItems})

        //console.log(cartItems);

    }



  render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Search handleClickFromApp={this.handleClickFromApp} callbackFromApp={this.searchCallback} />
                </div>

                <div className="col">
                    <DisplayProduct currentProduct={this.state.currentProduct} handleAddToCart={this.handleAddToCart} />
                </div>

                <div className="col">
                    <DisplayCart cartItems={this.state.cartItems} />
                </div>
            </div>
        </div>
    );
  }
}

export default hot(module)(App);