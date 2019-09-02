import React from 'react';
import { hot } from 'react-hot-loader';
import styles from 'style.scss';

import SearchList from './components/searchlist/searchlist';
import ProductView from './components/productview/productview';
import Cart from './components/cart/cart';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        error: null,
        isLoaded: false,
        products: [],
        selectedItem: "",
        cartItems: []
    };

    this.handleClickToView = this.handleClickToView.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleClickToView(index){
      console.log('clicked ' , index)

      let selectedItem = this.state.products[index];

      this.setState({
          selectedItem : selectedItem
      })
  }

  handleAddToCart(id){
      console.log('added ' , id)

      let products = this.state.products
      let selectedId = parseInt(id)-1;
      let itemToAdd = products[selectedId]

      let cartItems = this.state.cartItems;

      cartItems.push(itemToAdd );

      this.setState({
          cartItems: cartItems
      })

      console.log(this.state.cartItems);
  }

  componentDidMount() {
    fetch("http://localhost:3000/products")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            products: result.products
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
      const { error, isLoaded, products } = this.state;

      if (error) {
          return (
              <div className={styles.container}>
                  <div>Error: {error.message}</div>
                  <SearchList
                        products = {products}
                        error={error}
                        isLoaded={isLoaded}
                        handleClickToView={this.handleClickToView}/>
                  <ProductView selectedItem = {this.state.selectedItem} handleAddToCart={this.handleAddToCart} />
                 <Cart cartItems={this.state.cartItems}/>
              </div>
          );

      } else if (!isLoaded) {
          return (
              <div className={styles.container}>
                  <div>Loading...</div>
                  <SearchList products = {this.state.products} error={error} isLoaded={isLoaded} handleClickToView={this.handleClickToView}/>
                  <ProductView selectedItem = {this.state.selectedItem} handleAddToCart={this.handleAddToCart}/>
                  <Cart cartItems={this.state.cartItems}/>
              </div>

          );


      } else {
          return (
              <div className={styles.container}>
                <SearchList products = {this.state.products} error={error} isLoaded={isLoaded} handleClickToView={this.handleClickToView}/>
                <ProductView selectedItem = {this.state.selectedItem} handleAddToCart={this.handleAddToCart}/>
                <Cart cartItems={this.state.cartItems}/>
              </div>

        );

      }

  }
}

export default hot(module)(App);
