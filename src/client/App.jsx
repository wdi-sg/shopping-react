import React from 'react';
import { hot } from 'react-hot-loader';

import Search from './components/search/search';
import Product from './components/product_display/product_display';
import Shop from './components/shop_cart/shop_cart';

import Test from './components/test/test';
import styles from './style.scss';

class App extends React.Component {
    constructor() {
        super();
        this.clickedItem = this.clickedItem.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.addToPrice = this.addToPrice.bind(this);
        this.state = {
            message: 'user-name',
            categoryItem:{},
            shoppingCartItems:[],
            priceArr:[],
            payment:{},
        };
    }

    // /function handler passed to child component on items search. Value passed up to app parent

    clickedItem(e){

        var obj = {
            name: `${e.target.innerText}`,
            price: `${e.target.childNodes[2].childNodes[0].innerText}`,
            desc:`${e.target.childNodes[2].childNodes[1].innerText}`,
        };

        this.setState( {categoryItem: obj} );
    }

    addToCart(e){

        var obj = {
            name: `${e.target.childNodes[1].
            childNodes[0].innerText}`,
            price: `${e.target.childNodes[1].childNodes[1].innerText}`,
            desc: `${e.target.childNodes[1].childNodes[2].innerText}`,
        };
        this.state.shoppingCartItems.push( {obj} );
        this.setState( this );

        this.addToPrice(e.target.childNodes[1].childNodes[1].innerText)
    }

    addToPrice(p){

        var price = parseFloat(p.slice(1, p.length));
        this.state.priceArr.push( price );
        this.setState( this );

        this.payment(this.state.priceArr);
    }

    payment(arr){

        let sub = arr.reduce((partial,a)=> partial + a,0);
        sub = sub.toFixed(2);

        console.log('subtotal', typeof sub)
        let shippingFees = sub * 0.05;
        shippingFees = shippingFees.toFixed(2);

        console.log('shippingfees', typeof shippingFees);
        let gst = sub * 0.07;
        gst = gst.toFixed(2)
        console.log('gst', typeof gst)

        let final = Number(sub) + Number(shippingFees) + Number(gst);
        final = final.toFixed(2);

        let obj ={
            subtotal: `${sub}`,
            shipping: `${shippingFees}`,
            GST:`${gst}`,
            total:`${final}`,
        }

        this.setState({payment:obj})
    }

    render() {
        return (
            <div className={styles.main}>

                <div className={styles.search}>
                    Welcome.
                    <Search  clickedItem={this.clickedItem}/>
                </div>

                <div className={styles.product}>
                    <Product giveYou={this.state.categoryItem} addToCart={this.addToCart} addToPrice={this.addToPrice}/>
                </div>

                 <div className={styles.shopping_cart}>
                    <Shop giveYou={this.state.shoppingCartItems}
                    givePrice={this.state.payment}/>
                </div>
            </div>
        );
    }
}

export default hot(module)(App);

// <Counter message={this.state.message} />