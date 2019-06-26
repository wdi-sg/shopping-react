import React from 'react';
import { hot } from 'react-hot-loader';

import Search from './components/search/search';
import Product from './components/product/product';
import Cart from './components/cart/cart';

import styles from './style.scss';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [],
            currProduct: [],
            cartItems: [],
        };
        this.makeAjaxCall = this.makeAjaxCall.bind(this);
        this.getProductInfo = this.getProductInfo.bind(this);
        this.addToCart = this.addToCart.bind(this);
        // this.removeitem = this.removeitem.bind(this);
        this.clearCart = this.clearCart.bind(this);
    }

    makeAjaxCall() {
        fetch('/products')
        .then(response => {
            // console.log(response);
            return response.json();
        })
        .then(json => {
            // console.log('json', json.products);
            this.setState({items: json.products})
        })
    }

    componentDidMount(){
        // this.makeAjaxCall();
    }

    getProductInfo(e) {
        let index = e.target.id;
        let items = this.state.items;
        let clickedItem = items[index];
        let newCurrItem = [];

        newCurrItem.push(clickedItem);

        this.setState({
            currProduct: newCurrItem
        })
    }

    addToCart() {
        let currProduct = this.state.currProduct;
        let newCartItems = this.state.cartItems;

        newCartItems.push(currProduct);
        // console.log(newCartItems);

        this.setState({
            cartItems: newCartItems
        })
    }

    clearCart() {
        let newCart = this.state.cartItems;

        newCart = [];

        this.setState({
            cartItems: newCart
        })
    }

    render() {

        const items = this.state.items.map((item, index) => {

            return  <div key={index}
                        id={index}
                        onClick={(e) => {this.getProductInfo(e)}}
                    >
                    {item.name}
                    </div>
        });
        return (
            <div className={styles.contain}>
                <div className="row">
                    <div className="col">
                        <h4>Search</h4>
                        <Search
                        makeAjaxCall={(e) => {this.makeAjaxCall(e)}}
                        />
                    </div>
                    <div className="col">
                        <h4>Product</h4>
                    </div>
                    <div className="col">
                        <h4>Cart</h4>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        {items}
                    </div>
                    <div className="col">
                        <Product
                            clickedItem={this.state.currProduct}
                            addToCart={(e) => {this.addToCart(e)}}
                        />
                    </div>
                    <div className="col">
                        <Cart
                            cartItems={this.state.cartItems}
                            clearCart={(e) => {this.clearCart(e)}}
                        />
                    </div>
                </div>
            </div>

        );
    }
}


export default hot(module)(App);