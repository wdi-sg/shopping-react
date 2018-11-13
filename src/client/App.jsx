import React from 'react';
import {hot} from 'react-hot-loader';

import Counter from './components/counter/counter';
import Form from './components/form/form';
import Product from './components/product/product';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entered: "",
      results: "",
      show: ""
    };
    this.getInput = this.getInput.bind(this);
    this.getQuery = this.getQuery.bind(this);
    this.sortItems = this.sortItems.bind(this);
    this.selectedProd = this.selectedProd.bind(this);
  }

  getInput(event) {
    this.setState({entered: event.target.value});
    this.setState({results: ""});
  }

  getQuery(event) {
    event.preventDefault();

        const reactThis = this;

        const reqListener = function () {
            let results = JSON.parse(this.responseText);

            reactThis.setState({results: results.items});
        }

        let request = new XMLHttpRequest();
        request.addEventListener("load", reqListener);
        request.open("GET", "/api/query?search=" + this.state.entered);
        request.send();
  };

  sortItems(event) {
    let doSort = this.state.results;

     if (event.target.value === "name") {
        let sortedArr = doSort.sort(function(a,b) {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);} );
        console.log("sorted arr", sortedArr);
        this.setState({results: sortedArr});
    } else if (event.target.value === "price") {
        let sortedArr = doSort.sort(function(a,b) {return (a.msrp > b.msrp) ? 1 : ((b.msrp > a.msrp) ? -1 : 0);} );
        console.log("sorted arr", sortedArr);
        this.setState({results: sortedArr});
    }
    else if (event.target.value === "ratings" ) {
        let sortedArr = doSort.sort(function(a,b) {return (a.customerRating > b.customerRating) ? 1 : ((b.customerRating > a.customerRating) ? -1 : 0);} );
        console.log("sorted arr", sortedArr);
        this.setState({results: sortedArr});
    };
  };


  selectedProd(event) {
    console.log(event.target.value);
    let selectedProd = this.state.results[event.target.value];
    this.setState({show: selectedProd});
  };






  render() {
    console.log('app entered', this.state.entered);
    console.log('results', this.state.results);

    return (
      <div>
        <h1>Walmart</h1>
        <div className="children">
            <Form input={this.getInput} request={this.getQuery} sort={this.sortItems} output={this.state.results} selected={this.selectedProd}/>
            <Product info={this.state.show} />
        </div>
        <Counter message={this.state.message} />
      </div>
    );
  }
}

export default hot(module)(App);
