import React from 'react';
import {hot} from 'react-hot-loader';

import Counter from './components/counter/counter';
import Search from './components/search/search';
import Product from './components/product/product';
import styles from './style.scss';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
      result: [],
      product: '',
      requiredProduct: ''
    };
    this.searchHandler = this.searchHandler.bind( this );
    this.getItem = this.getItem.bind( this );
    this.sortFunc = this.sortFunc.bind( this );
    this.clickhandler = this.clickhandler.bind( this );
  }

  searchHandler(event){
    event.preventDefault();
    this.setState({searchInput: this.state.searchInput})
  //copy the value of this in order to refer to it in another way.
    var reactThis = this;
    function reqListener(){
        // console.log("SOMETHING RESPONSE: ", this.responseText);
        // console.log("WHAT IS THIS! ",this);

        //transform the response to real js objects
        const search = JSON.parse( this.responseText );
        // console.log("SOMETHING SEARCHING: ", search.items);


        // here, we can't do this.setState

        //refer to react state instead
        reactThis.setState({result: search.items });
        // console.log("THE RESULTS ARE: ", reactThis.state.result);
    }

    const oReq = new XMLHttpRequest();
    var ajaxUrl = "http://localhost:3000/api/query?search=" + reactThis.state.searchInput;
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", ajaxUrl);
    oReq.send();
  }

  getItem(event){
    this.setState({searchInput: event.target.value});
  }

  sortFunc(sortby){
    if(sortby === "ascendPrice"){
        let sortedArray = this.state.result.sort(function compare(a,b){
            if(a.salePrice > b.salePrice){
                return 1;
            }
            if(a.salePrice < b.salePrice){
                return -1;
            }
            return 0;
        })
        this.setState({result: sortedArray});
    }
    else if(sortby === "descendPrice"){
        let sortedArray = this.state.result.sort(function compare(a,b){
            if(a.salePrice > b.salePrice){
                return -1;
            }
            if(a.salePrice < b.salePrice){
                return 1;
            }
            return 0;
        })
        this.setState({result: sortedArray});
    }
    else if(sortby === "reviews"){
        let sortedArray = this.state.result.sort(function compare(a,b){
            if(a.numReviews > b.numReviews){
                return 1;
            }
            if(a.numReviews < b.numReviews){
                return -1;
            }
            return 0;
        })
        this.setState({result: sortedArray});
    }
  }

  clickhandler(event){
    console.log("CLICKING WORKS!");
    this.state.product = event.target.dataset.value
    this.state.requiredProduct = this.state.result[this.state.product];
    this.setState({
        product: this.state.product,
        requiredProduct: this.state.requiredProduct
    });
    console.log("PRODUCT STATE: ", this.state.product);
    console.log("REQUIRED PRODUCT STATE: ", this.state.requiredProduct);


  }

  render() {
    //<Counter message={this.state.message} />
    //<Search search={this.searchHandler} value={input}/>
    //<Search search={this.searchHandler} items={this.getItem} />

    const {input} = this.state;
    // console.log("SEARCH APPPPPPPPPP RESULTS: ", this.state.result);
    return (
      <div>
        <h1>Welcome to Walmart.</h1>
        <div className={styles.container}>
            <div className={styles.flex1}>
                <Search search={this.searchHandler} sort={this.sortFunc} items={this.getItem} result={this.state.result} click={this.clickhandler}/>
            </div>
            <div className={styles.flex2}>
                <Product requiredProduct={this.state.requiredProduct}/>
            </div>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
