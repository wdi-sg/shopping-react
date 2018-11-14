import React from 'react';
import {hot} from 'react-hot-loader';

import Product from './components/product/product';
import Cart from './components/cart/cart';
import Form from './components/form/form';

class App extends React.Component {
  constructor() {
    super();
    this.getItem = this.getItem.bind( this );
    this.submit = this.submit.bind( this );
    this.showProduct = this.showProduct.bind( this );
    this.addCart = this.addCart.bind( this );
    this.state = {
      query: '',
      item: {},
      id: null,
      result: [],
      cartitem: [],
      allowDisplay: false,
      }

    }
    getItem(event){
        this.setState({query: event.target.value.toLowerCase()});
    }

    submit(event){
    event.preventDefault();
    this.setState({query:this.state.query})

    console.log("query",this.state.query)

    //copy the value of this in order to refer to it in another way.
    var reactThis = this;

    function reqListener () {
    //console.log("res text",this.responseText);

   //transform the response to real js objects
    const data = JSON.parse( this.responseText );
    console.log("data",data.items)

   //refer to react state instead
    reactThis.setState({result: data.items});
    }

    var oReq = new XMLHttpRequest();
    var baseurl = 'http://localhost:3000/api/query?search=' + reactThis.state.query;
    oReq.addEventListener("load", reqListener);
    oReq.open('GET', baseurl);
    oReq.send();
    this.setState({query: ''});//clear the input field after req send

    };

    showProduct(singleitem, index){
        //console.log("singleitem",singleitem)
        //console.log("index", index)
        this.setState({allowDisplay: true, item: singleitem});
        // this.setState({id: index});
    };

    addCart(additem){
        console.log("cart item", additem);
        this.state.additem = additem;
        this.setState({cartitem: [...this.state.cartitem, this.state.additem],allowDisplay: true });
        // console.log("cart Array", this.state.cartitem);
    }



  render() {

    return (
      <div>
        <h2>Foomart</h2>
        <Form getItem={this.getItem}
              submit={this.submit}
              query={this.state.query}
              result={this.state.result}
              showProduct={this.showProduct} />
        {this.state.allowDisplay &&
            <Product cartItem={this.addCart} displayProduct={this.state.item} />
        }
        {this.state.allowDisplay &&
        <Cart cartItem={this.state.cartitem} />
        }
    </div>
    );
  }
}

export default hot(module)(App);

