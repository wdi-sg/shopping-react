import React from 'react';
import { hot } from 'react-hot-loader';

import Info from './components/info/info';
import Form from './components/form/form';
import Cart from './components/cart/cart';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        error: null,
        isLoaded: false,
        products:[],
        searchResults: [],
        details: [],
        cart: []
    };
    this.searchFilter = this.searchFilter.bind(this);
    this.detailsClick = this.detailsClick.bind(this);
    this.addCart = this.addCart.bind(this);
  }

  //get details
    detailsClick (event){
        console.log(event.target.value);
        let products = this.state.products;
        let detail = products.filter(product =>  {return product.id == event.target.value})
        this.setState({details: detail[0]})
  }

//add to cart function

    addCart (event) {
        console.log(event.target.value);
        let products = this.state.products;
        let newCartItem = products.filter(product =>  {return product.id == event.target.value});
        let cart = this.state.cart;
        cart.push(newCartItem[0])
        this.setState({cart: cart})


    }
 //searchfilter
    searchFilter (event) {
        console.log(event.target.value)
        let products = this.state.products;
    //this is case sensitive
        let result = products.filter(product=> product.name.includes(event.target.value));
        console.log(this.state.searchResults)
        this.setState({searchResults: result})
 }
//ajax
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
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
            <div className = "container">
                <div className = "row">
                    <div className ="col-4">
                    <Form  products= {this.state.products} searchFilter={this.searchFilter} searchResults={this.state.searchResults} detailsClick={this.detailsClick}/>
                    </div>
                    <div className ="col-4">
                        <Info details ={this.state.details} addCart={this.addCart}/>
                    </div>
                    <div className ="col-4">
                        <Cart cart={this.state.cart}/>
                    </div>
                </div>
            </div>
      );
    }
  }
}

export default hot(module)(App);