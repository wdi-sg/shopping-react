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
            subtotal: 0,
            gst: 0,
            shipping: 0,
            total: 0,

        };
        this.makeAjaxCall = this.makeAjaxCall.bind(this);
        this.getProductInfo = this.getProductInfo.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.calcSubtotal = this.calcSubtotal.bind(this);
        this.calcGst = this.calcGst.bind(this);
    }

    calcGst() {
        let currSubtotal = this.state.subtotal;
        console.log(currSubtotal);
        let newGst = (currSubtotal * 0.07).toFixed(2);
        this.setState({gst: newGst});
    }

    calcSubtotal() {
        let cartItems = this.state.cartItems;
        let prices = cartItems.price;
        let priceArr = [];

        for (let i = 0; i < cartItems.length; i++) {
            let item = cartItems[i];
            for (let j = 0; j < item.length; j++) {
                let price = (item[j].price).substr(1);
                priceArr.push(parseFloat(price));
            }
        }
        let sum = priceArr.reduce((a, b) => a + b, 0);
        let roundSum = sum.toFixed(2);
        // console.log(priceArr);
        // console.log(sum);

        this.setState({
            subtotal: roundSum
        })
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

            return  (<div key={index}
                        id={index}
                        onClick={(e) => {this.getProductInfo(e)}}
                    >
                    {item.name}
                    </div>)
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
                            calcSubtotal={(e) => {this.calcSubtotal(e)}}
                            calcGst={(e) => {this.calcGst(e)}}
                        />
                    </div>
                    <div className="col">
                        <Cart
                            cartItems={this.state.cartItems}
                            subtotal={this.state.subtotal}
                            gst={this.state.gst}
                        />
                    </div>
                </div>
            </div>

        );
    }
}


export default hot(module)(App);