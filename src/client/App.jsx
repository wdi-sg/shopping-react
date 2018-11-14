import React from 'react';
import {hot} from 'react-hot-loader';
import styles from './style.scss';


//Importing stuff from the different components into the App.jsx
import Search from './components/search/search';
import Item from './components/items/item';
import Cart from './components/cart/cart';


class App extends React.Component {

    constructor(props) {

        super()

        this.state = {

            item: '',
            cart: []
        };

        this.showItem = this.showItem.bind(this)
        this.addToCart = this.addToCart.bind(this)
    }

    showItem(value) {

        this.setState({item: value})
    }

    addToCart(item) {

        let cartArray = [...this.state.cart];
         cartArray.push(item);

         this.setState({cart: cartArray});
    }


    render() {

        return(
            <div>

                <div>
                    <h3>Welcome To Walmart.io</h3>
                    <Search show={this.showItem}/>
                </div>

                <div>
                    <Item item={this.state.item} addToCart={this.addToCart}/>

                </div>

                <div>
                    <Cart cartItems={this.state.cart}/>

                </div>

            </div>
        )

    }

}

 export default hot(module)(App);


