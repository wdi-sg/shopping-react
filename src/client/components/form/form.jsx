import React from 'react';
import styles from './style.scss';
import Product from '../product/product.jsx';

class Form extends React.Component {

  constructor() {
    super();
    this.changeHandler = this.changeHandler.bind( this );
    this.submitHandler = this.submitHandler.bind( this );
    this.showProductHandler = this.showProductHandler.bind( this );
  
    this.state = {
      searchQuery: '',
      queryResults: '',
      productInfo: '',
    };
  };  

  changeHandler(event){
    console.log("logging", event.target.value);
    this.setState({searchQuery:event.target.value});
    }

  submitHandler(){
    var reactThis = this; 

    var reqListener = function(){
      const data = JSON.parse(this.responseText);
      // console.log(data);
      reactThis.setState({queryResults: data});
      // console.log(reactThis.state.queryResults.items);
    }

    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    // this search refers to req.query.search in the query.js file
    oReq.open('GET', `/api/query?search=${this.state.searchQuery}`);
    oReq.send();
  }

  showProductHandler(product){
    // console.log(product);
    this.setState({productInfo: product});
    // console.log(this.state.productInfo);
  }

  render() {
    if (this.state.queryResults) {
      var listOfSearchResults = this.state.queryResults.items.map((product, index) => (
        <React.Fragment>
          <li className="listItems" key={index}><a onClick={this.showProductHandler.bind(null,product)} href="#">{product.name}</a></li>
          <br></br>
        </React.Fragment>
      ))
    } else {
      var listOfSearchResults = '';
    }

    return (
      <div className={styles.content}>
        <div className={styles.searchcolumn}>
          <input onChange={this.changeHandler} className={styles.name} value={this.state.searchQuery}/>
          <button onClick={this.submitHandler} className={styles.name}>Search</button><br/>
          <h5>{listOfSearchResults}</h5>
        </div>
        <Product queryResults={this.state.queryResults} productInfo={this.state.productInfo}/>
      </div>
    );
  }
}

export default Form;
