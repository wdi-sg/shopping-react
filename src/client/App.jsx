import React from 'react';
import {hot} from 'react-hot-loader';

import Counter from './components/counter/counter';
import Form from './components/form/form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'hello',
      searchResults:'',
      dataResults:[]
    };

  this.changeHandler = this.changeHandler.bind(this);
  this.submitHandler = this.submitHandler.bind(this);

  }

  changeHandler(event){
      this.setState({
        searchResults: event.target.value
      });
      console.log("Change: ", event.target.value);
  }

  // submitHandler(event){

  //   this.setState({
  //     searchResults: this.state.searchResults
  //   })
  //     console.log("Search: ", this.state.searchResults);
  // }

  // submitHandler()

  submitHandler(event) {

     // copy the value of this in order to refer to it in another way.
    var reactThis = this;

    console.log("reactThis: ", reactThis);
    
    var reqListener = function() {
      console.log("Response Text: ", this.responseText);
     
     //transform the response to real js objects
      const data = JSON.parse( this.responseText );
      console.log("Data: ", data);
     
     // here, we can't do this.setState
     
     //refer to react state instead
      reactThis.setState({dataResults:data.items});
      console.log(data.items);
      // console.log(reactThis.state.searchResults)

    }

    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", '/api/query?search=' + reactThis.state.searchResults);
    oReq.send();

  }

  render() {
    return (
      <div>
        <Form />
        <input onChange={this.changeHandler} value={this.state.searchResults} placeholder="search input"/>
        <button onClick={this.submitHandler}>Search</button>
         <Counter dataResults={this.state.dataResults} />
       
      </div>
    );
  }
}

export default hot(module)(App);


  

