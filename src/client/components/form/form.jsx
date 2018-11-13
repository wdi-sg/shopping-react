import React from 'react';

import styles from './style.scss';

class Form extends React.Component {
  constructor() {
    super();
    this.getItem = this.getItem.bind( this );
    this.submit = this.submit.bind( this );
    this.state = {
      query: '',
      result: [],
      monkey: 'haha'
    };

    }

  submit(event){
    event.preventDefault();
    this.setState({query:this.state.query})

    console.log("query",this.state.query)

    //copy the value of this in order to refer to it in another way.
    var reactThis = this;

    function reqListener () {
    //console.log("res text",this.responseText);

   //transform the response to real js objects
    const data = JSON.parse( this.responseText );
    console.log("data",data.items)

   //refer to react state instead
   reactThis.setState({result: data.items});
  }

  var oReq = new XMLHttpRequest();
  var baseurl = 'http://localhost:3000/api/query?search=' + reactThis.state.query;
  oReq.addEventListener("load", reqListener);
  oReq.open('GET', baseurl);
  oReq.send();
  }

  getItem(event){
        this.setState({query: event.target.value});
    }

  render() {
    return (
      <div>
        <h3>What are you searching for?</h3>
        <form onSubmit={this.submit}>
        <input className={styles.inputstyle} value={this.state.query} onChange={this.getItem} placeholder="Search for..."/>
        <button>Search</button>
        </form>
      </div>
    );
  }
}

export default Form;
