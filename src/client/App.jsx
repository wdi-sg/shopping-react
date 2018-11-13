import React from 'react';
import {hot} from 'react-hot-loader';

import Product from './components/product/product';

import Form from './components/form/form';

class App extends React.Component {
  constructor() {
    super();
    this.getItem = this.getItem.bind( this );
    this.submit = this.submit.bind( this );
    this.showProduct = this.showProduct.bind( this );
    this.state = {
      query: '',
      item: null,
      index: '',
      result: [],
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
        console.log("singleitem",singleitem)
        console.log("index", index)
        this.setState({item: singleitem});
    }




  render() {

    return (
      <div>

        <Form getItem={this.getItem}
              submit={this.submit}
              query={this.state.query}
              result={this.state.result}
              showProduct={this.showProduct} />

        <Product displayProduct={this.state.item} />
    </div>
    );
  }
}

export default hot(module)(App);

