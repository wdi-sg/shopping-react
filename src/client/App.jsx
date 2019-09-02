import React from 'react';
import { hot } from 'react-hot-loader';

import SearchForm from './components/search/searchForm';
import SearchResults from './components/search/searchResults';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      searchName: "",
      searchSort: "",
      searchOrder: ""
    };

  }

  componentDidUpdate(){
    console.log("UPDATED STATE:", this.state)
    console.log("products is:", typeof this.state.products)
  }

  componentDidMount(){
    var appThis = this;
    var responseHandler = function() {
      console.log("response text", this.responseText);
      var response = JSON.parse( this.responseText );
      let products = [...appThis.state.products];
      console.log('spread products:', typeof products)
      for(let i=0; i<response.products.length; i++){
        products.push(response.products[i]);
      }
      // appThis.setState({products: products});
    };

    var request = new XMLHttpRequest();
    request.addEventListener("load", responseHandler);
    request.open("GET", "/products");
    request.send();
  }

  //changes name
  changeHandler(){
    console.log(this.state.search);
    let input = event.target.value;
    this.setState({searchName: input});
  }

  render() {
    return (
      <div>
        <SearchForm products={this.state.products} changeHandler={()=>{this.changeHandler()}}/>
        <SearchResults products={this.state.products}/>
      </div>
    );
  }
}

export default hot(module)(App);