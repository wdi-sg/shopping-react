import React from 'react';
import { hot } from 'react-hot-loader';

import Search from './components/search/search';
import Product from './components/product/product';
import Cart from './components/cart/cart';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      item:'hahaha',
       
      products: [],
      list: [],
      cart:[],
      subtotal: 0
    

    };
    this.search = this.search.bind(this)
    this.display = this.display.bind(this)
    this.add = this.add.bind(this)
  }

  componentDidMount() {
    fetch('/products')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            products: result.products
          });
        },
        
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  } 
  search (){
    let list = this.state.products;
    // console.log(list)
    this.setState({list: list});
    

  };
  display(e) {
    let id = e.target.id -1;
    // console.log(id)
    this.setState({item: this.state.products[id]})
    
  }
  add(e){
    let item = this.state.item;
    
    this.state.cart.push(item);
    let subtotal = parseFloat(this.state.subtotal) + parseFloat(this.state.item.price.slice(2));
    this.setState({cart: this.state.cart, subtotal: this.state.subtotal});
    console.log(subtotal)
  }


  

  render() {
    const { error, isLoaded, products} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
    return (
      <div>

        <Cart subtotal = {this.state.subtotal} cart = {this.state.cart}/>
        <Product add = {this.add} item = {this.state.item}/>
        <Search list = {this.state.list} search = {this.search} display = {this.display}/>
      </div>
    );
  }
}


}

export default hot(module)(App);