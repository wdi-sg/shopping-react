import React from 'react';

import styles from './style.scss';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
      counter : 0,
      queryResult: {}

    };
  }

  doReq(){

    console.log("WOW REQUEST");
    this.setState({counter: this.state.counter+1});
    var s = this.state.searchInput;
    console.log("this.state.searchInput",s);


    // rename react component context (this keyword) so that I can reference this.setState in responseHandler
    const banana = this;

    // what to do when we recieve the request
    var responseHandler = function() {

        console.log("response text", this.responseText);
        console.log("status text", this.statusText);
        console.log("status code", this.status);
        const result = JSON.parse( this.responseText);

        console.log("this.state.searchInput",s);
        // banana.setState({currentProduct: result});
        var searchResult ={}
        result.products.map((product)=>{
            console.log(product.name)
            if(s === product.name){
                searchResult=product

            }
        });
        banana.setState({queryResult:searchResult})
        var f = banana.state.queryResult
        console.log(f)

    };

    // make a new request
    var request = new XMLHttpRequest();

    // listen for the request response
    request.addEventListener("load", responseHandler);

    // ready the system by calling open, and specifying the url
    // request.open("GET", "https://swapi.co/api/people/1");
    request.open("GET", "http://localhost:3000/products");

    // send the request
    request.send();
  }

  storeWord(){
    console.log("storeword",event.target.value);
    var sInput = event.target.value;
    this.setState({searchInput: sInput})
    console.log("this.state.searchInput",this.state.searchInput);
  }

  showResult(){
    console.log("result",this.state.searchInput);
  }

  render() {
    return (
      <div>
        <p>
            <button onClick={()=>{this.doReq()}}>Search</button>
        </p>
        <p>search query: {this.state.searchInput}</p>


        <input className={styles.name} onChange={()=>{this.storeWord()}} />

        <p>{this.state.queryResult.id}</p>
        <p>{this.state.queryResult.name}</p>
        <p>{this.state.queryResult.price}</p>
        <p>{this.state.queryResult.description}</p>


      </div>
    );
  }
}

export default Search;