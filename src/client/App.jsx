import React from 'react';
import {hot} from 'react-hot-loader';

import Item from './components/item/item';
import Form from './components/form/form';
import Cart from './components/cart/cart';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
			item: null,
			cart: []
		};
		
		this.setValue = this.setValue.bind(this);
		this.addToCart = this.addToCart.bind(this);
	}
	
	setValue(value) {
		this.setState({item: value});
	}

	addToCart(item) {
		this.state.cart.push(item);
		this.setState({cart: this.state.cart});
	}

  render() {
    return (
      <div>
        <Form setValue={this.setValue} />
				<Item item={this.state.item} add={this.addToCart}/>
				<Cart cart={this.state.cart} />
      </div>
    );
  }
}

export default hot(module)(App);
