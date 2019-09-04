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
      searchWord: '',
      products:[],
      searchResults:[],
      selectedProduct:null,
      cartList:[]
    };
    this.handleInput = this.handleInput.bind(this);
    this.makeAjaxCall = this.makeAjaxCall.bind(this);
    this.selectedProduct = this.selectedProduct.bind(this);
    this.addToCart = this.addToCart.bind(this);

  }

    handleInput(event){
        let currentValue = event.target.value;
        this.setState({searchWord:currentValue});
    }

    selectedProduct(event){

        this.state.selectedProduct = this.state.products.filter(x=>x.name === event.target.innerText)[0]
        this.setState({selectedProduct:[this.state.selectedProduct]})

        // console.log(this.state.selectedProduct)

    }

    addToCart(event){
        this.setState({cartList:[this.state.selectedProduct,...this.state.cartList]})
        // console.log(this.state.cartList)
    }

   makeAjaxCall(){

    const thisWord = this;

    var responseHandler = function(){
        const result = JSON.parse( this.responseText);
        thisWord.setState({products: result.products});


        let searchList = thisWord.state.products? thisWord.state.products.filter(x=>x.name.toLowerCase().includes(thisWord.state.searchWord.toLowerCase())):null;
        thisWord.setState({searchResults:searchList})

    };

    var request = new XMLHttpRequest();
    request.addEventListener("load", responseHandler);
    request.open("GET", "/products");
    request.send();
  }




  render() {
    return (
      <div className={styles.app_wrapper}>
        <Search
            handleInput={this.handleInput}
            makeAjaxCall={this.makeAjaxCall}
            searchWord={this.state.searchWord}
            products={this.state.products}
            selectedProduct={this.selectedProduct}
            searchResults={this.state.searchResults}>
        </Search>
        <Product
            selectedProduct={this.state.selectedProduct}
            addToCart={this.addToCart}>
        </Product>
        <Cart cartList={this.state.cartList}>
        </Cart>
      </div>
    );
  }
}

export default hot(module)(App);