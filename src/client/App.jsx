import React from 'react';
import {hot} from 'react-hot-loader';

import Counter from './components/counter/counter';
import Form from './components/form/form';
import Cart from './components/cart/cart';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'hello',
      filterText: '',
      results: [], //gets you walmart api of the search items
      textArea: []
    };
  }

  componentDidMount(){

    var thisReact = this;

    // what to do when we recieve the request
    var responseHandler = function() {
      // console.log("response text", this.responseText);
      console.log("status text", this.statusText);
      console.log("status code", this.status);
      var response = JSON.parse(this.responseText);

      thisReact.setState({results: response})
    };

    // make a new request
    var request = new XMLHttpRequest();

    // listen for the request response
    request.addEventListener("load", responseHandler);

    // ready the system by calling open, and specifying the url
    request.open("GET", '/api/query?search=peanut');  //how do we do a query search ?

    // send the request
    request.send();

  }

  filterUpdate(value){
    this.setState({
        filterText: value
    });
  }

  submitHandler(){
    // newTextArr= this.state.textArea.splice()
    // newTextArr.push(this.state.filterText )
    // this.setState({
    //   textArr: newTextArea,
    //   filterText: ''
    // })
    console.log('activated from submitHandler from App.jsx')
  }

  showResults(results){
    console.log('From showResults from App.jsx', results)
  }
  
  render() {
    console.log('Results from App.jsx', this.state.filterText)
    return (
      <div class='row'>
        <div class="col s4">
          <h4>Search</h4>
          <Form 
            filterUpdate={this.filterUpdate.bind(this)}
            submitHandler={this.submitHandler.bind(this)} //does this refers to to the event happening on this page or back in the form?
          />
        </div>
        <div class="col s4">
          <h4>Product</h4>
          <Counter 
            message={this.state.message}
            searchProduct={this.state.results} 
          />
        </div>
        <div class="col s4">
          <h4>Cart</h4>
          <Cart />
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
