import React from 'react';
// import PropTypes from 'prop-types';
// import styles from './style.scss';
import SearchForm from './searchForm';
import SearchResults from './searchResults';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchWord: 'haha',
      products:[],
      searchResults:[]
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

    handleInput(event){
        let currentValue = event.target.value;
        this.setState({searchWord:currentValue});
    }

    handleSubmit(event) {
        // console.log(this.state.searchWord);
        // makeAjaxCall();
        // console.log(this.state.items)
        event.preventDefault();
    }

   makeAjaxCall(){
    event.preventDefault();

    console.log("WOW REQUEST");
    // rename react component context (this keyword) so that I can reference this.setState in responseHandler
    const thisWord = this;

    // what to do when we receive the request
    var responseHandler = function(){
        // console.log("response text", this.responseText);
        // console.log("status text", this.statusText);
        // console.log("status code", this.status);
        const result = JSON.parse( this.responseText);
        // console.log( result.products[4].name );
        thisWord.setState({products: result.products});

        console.log( thisWord.state.products );
        // console.log(products)
        let allProducts = this.state.products
        let allName = allProducts.map(obj => {
            if (obj.name.toLowerCase().includes(this.state.searchWord)) {
                this.state.searchResults.push(obj);
            }
        })
    };

    // make a new request
    var request = new XMLHttpRequest();

    // listen for the request response
    request.addEventListener("load", responseHandler);

    // ready the system by calling open, and specifying the url
    request.open("GET", "/products");

    // send the request
    request.send();
  }


  render() {


    return (
      <div>
        <SearchForm
            handleInput={this.state.handleInput}
            searchWord={this.state.searchWord}
            handleSubmit={this.state.handleSubmit}
            makeAjaxCall={this.makeAjaxCall}>
        </SearchForm>

        <SearchResults
            searchResults={this.state.searchResults}>
        </SearchResults>
      </div>
    );
  }
}

export default Search;
