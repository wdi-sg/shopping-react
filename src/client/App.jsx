import React from 'react';
import { hot } from 'react-hot-loader';

import {Search} from './components/search/search';
import {Product} from './components/product/product';
import {Cart} from './components/cart/cart'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        title: "SHIOPPPING REACT CARRTTTT",
        items:['asdasdas'],
        products: ''
    }

  this.showProduct = this.showProduct.bind(this);
}
  makeAjaxCall =() => {
    console.log("hello");

    //copy the value of this in order to refer to it in another way.
    console.log( "set state function");
    console.log( this.setState );

    // get a hold of component for react
    var reactThis = this; //why???

    var reqListener = function(){
      console.log("hello");
      console.log(this.responseText);
      console.log("hello");

      const data = JSON.parse( this.responseText );
      console.log(this.state);
      reactThis.setState({items:data.products})
      console.log(reactThis.state);

      // this keyword doesnt refer to component
      //this.setState({items:this.responseText})

    }

    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "/products");
    oReq.send();
  }

  showProduct = (e) => {
    console.log('helllooo')
    console.log("product name:", e.target.name)
    this.setState({
        products: e.target.id
    })

    console.log(this.state)
  }

  render() {
    console.log(this.state.items)
    let title = this.state.title;
    return (
      <React.Fragment>
      <h1> {title} </h1>
      <div class="row">

      <Search
      makeAjaxCall={this.makeAjaxCall}
      items={this.state.items}
      showProduct={(e) => {this.showProduct(e)}}
      />

      <Product products={this.state.products}/>
      <Cart />
      </div>
      </React.Fragment>
    );
  }
}

export default hot(module)(App);