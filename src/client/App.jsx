import React from 'react';
import { hot } from 'react-hot-loader';
import Search from './components/search/search';

import Counter from './components/counter/counter';
import Form from './components/form/form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: null,
      sortInput: "name",
      sortedResults: []
    };
    this.searchHandler = this.searchHandler.bind(this);
    this.sortHandler = this.sortHandler.bind(this);
  }

  componentDidMount(){
    fetch("/products")
    .then(response => response.json())
    .then((result) => {
      this.setState({products:result.products})
    },
    (error) => {
      console.log(error)  
    })
  }
  
  searchHandler(searchInput){
    console.log("type", typeof this.state.sortInput);
    console.log("value", this.state.sortInput);
    let searchResults = [];
    this.state.products.map (product => {
      if (product.name.toLowerCase().includes(searchInput.toLowerCase())){
        searchResults.push(product);
        
        if (this.state.sortInput === "price") {
          console.log("searchResults1: ", searchResults);
          searchResults.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
          console.log("searchResults2: ", searchResults);
          this.setState({sortedResults:searchResults})
          
        } else {
          searchResults.sort();  
          this.setState({sortedResults:searchResults})
          // console.log("sortedResults: ", this.state.sortedResults);
        }
      } 
    })
  }

  sortHandler(sortInput){
    console.log("sortHandler", sortInput);
    let x = sortInput;
    this.setState({sortInput:x});
    console.log("sortInput: ", this.state.sortInput);
};


  render() {
    return (
      <div>
        <Search searchHandler={this.searchHandler} searchInput={this.state.searchInput} sortHandler={this.sortHandler} sortInput={this.state.sortInput} sortedResults={this.state.sortedResults} />
      </div>
    );
  }
}

export default hot(module)(App);