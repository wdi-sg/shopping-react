import React from 'react';
import {hot} from 'react-hot-loader';

import Counter from './components/counter/counter';
import Search from './components/search/search';
import styles from './style.scss';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
      result: []
    };
    this.searchHandler = this.searchHandler.bind( this );
    this.getItem = this.getItem.bind( this );
  }

  searchHandler(event){
    event.preventDefault();
    this.setState({searchInput: this.state.searchInput})
  //copy the value of this in order to refer to it in another way.
    var reactThis = this;
    function reqListener(){
        // console.log("SOMETHING RESPONSE: ", this.responseText);
        console.log("WHAT IS THIS! ",this);

        //transform the response to real js objects
        const search = JSON.parse( this.responseText );
        console.log("SOMETHING SEARCHING: ", search.items);


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
  render() {
    //<Counter message={this.state.message} />
    //<Search search={this.searchHandler} value={input}/>
    const {input} = this.state;
    console.log("SEARCH APPPPPPPPPP: ", this.searchHandler);
    return (
      <div>
        <form onSubmit={this.searchHandler}>
            <input className={styles.name} value={this.state.searchInput} onChange={this.getItem}/>
            <button>search</button>
        </form>
        Welcome.

      </div>
    );
  }
}

export default hot(module)(App);
