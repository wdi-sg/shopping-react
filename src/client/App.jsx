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
    }

    makeAjaxCall() {
        // get a hold of component for react
        var reactThis = this;

        var reqListener = function() {

            const data = JSON.parse(this.responseText);

            reactThis.setState({ items: data.products })
            // console.log(data);

            // this keyword doesnt refer to component
            //this.setState({items:this.responseText})
        }

        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", reqListener);
        oReq.open("GET", "/products");
        oReq.send();
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
                        />
                        <br/>
                        <div className="row">
                            <div className="col-6">
                                <span>Subtotal</span>
                            </div>
                            <div className="col">
                                $x.xx
                            </div>
                            <div className="col">
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <span>GST</span>
                            </div>
                            <div className="col">
                                $x.xx
                            </div>
                            <div className="col">
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <span>Shipping ($7)</span>
                            </div>
                            <div className="col">
                                $x.xx
                            </div>
                            <div className="col">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


export default hot(module)(App);