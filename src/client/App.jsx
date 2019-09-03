import React from 'react';
import { hot } from 'react-hot-loader';
import Search from './components/search/search';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchWord: 'Search',
      products:[],
      searchResults:[]
    };
    this.handleInput = this.handleInput.bind(this);
    this.makeAjaxCall = this.makeAjaxCall.bind(this);
  }

    handleInput(event){
        let currentValue = event.target.value;
        this.setState({searchWord:currentValue});
    }
    searchResults(){
        this.setState({products:[this.state.searchResults]})
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
      <div>
        <Search
            handleInput={this.handleInput}
            makeAjaxCall={this.makeAjaxCall}
            searchWord={this.state.searchWord}
            products={this.state.products}
            searchResults={this.state.searchResults}>
        </Search>
      </div>
    );
  }
}

export default hot(module)(App);