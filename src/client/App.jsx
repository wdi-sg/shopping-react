import React from 'react';
import {hot} from 'react-hot-loader';

import Counter from './components/counter/counter';
import Search from './components/search/search';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: ''
    };
    this.searchHandler = this.searchHandler.bind( this );
  }

  searchHandler(){
  //copy the value of this in order to refer to it in another way.
    var reactThis = this;
    var ajaxUrl = "http://localhost:3000/api/query?search=" + reactThis.state.searchInput;

    function reqListener(){
        console.log(this.responseText);
        console.log("WHAT IS THIS! ",this);

        //transform the response to real js objects
        const search = JSON.parse( this.responseText );

        // here, we can't do this.setState

        //refer to react state instead
        reactThis.setState({searchInput: search });
    }

    const oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", ajaxUrl);
    oReq.send();
  }

  render() {
    console.log("SEARCH APPPPPPPPPP: ", this.searchHandler);
    return (
      <div>
        <Search search={this.searchHandler}/>
        Welcome.
        <Counter message={this.state.message} />
      </div>
    );
  }
}

export default hot(module)(App);
