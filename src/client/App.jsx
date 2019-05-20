import React from 'react';
import { hot } from 'react-hot-loader';

import Counter from './components/counter/counter';
import Form from './components/form/form';
import Search from './components/search/search';
import Product from './components/product_display/product_display';
import Shop from './components/shop_cart/shop_cart';
import styles from './style.scss';

class App extends React.Component {
    constructor() {
        super();
        this.clickedItem = this.clickedItem.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.state = {
            message: 'user-name',
            categoryItem:{},
            shoppingCartItems:[],
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

        console.log('ADD STUFF TO CART!');
        console.log(e.target.childNodes[1].
            childNodes[0].innerText)
        console.log(e.target.childNodes[1].childNodes[1].innerText)
        console.log(e.target.childNodes[1].childNodes[2].innerText)

        var obj = {
            name: `${e.target.childNodes[1].
            childNodes[0].innerText}`,
            price: `${e.target.childNodes[1].childNodes[1].innerText}`,
            desc: `${e.target.childNodes[1].childNodes[2].innerText}`,
        };
        this.state.shoppingCartItems.push( {obj} );
        this.setState( this );
    }

    render() {
        return (
            <div className={styles.main}>

                <div className={styles.search}>
                    Welcome.
                    <Search  clickedItem={this.clickedItem}/>
                </div>

                <div className={styles.product}>
                    <Product giveYou={this.state.categoryItem} addToCart={this.addToCart}/>
                </div>

                 <div className={styles.shopping_cart}>
                    <Shop giveYou={this.state.shoppingCartItems}/>
                </div>

            </div>
        );
    }
}

export default hot(module)(App);

// <Counter message={this.state.message} />