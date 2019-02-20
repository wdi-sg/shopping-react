import React from 'react';

import styles from './style.scss';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
        search: "",
        results: null
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.search = this.search.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  changeHandler(event) {
    let target = event.target.value;
    this.setState({ [event.target.name]: target});
  }

  search(event) { //triggers the API to find the user requested item
    event.preventDefault();

    const reactThis = this;

    // const requestListener = function() {
    //   let results = JSON.parse(this.responseText);
    //   reactThis.setState({results: results});
    // }

    let request = new XMLHttpRequest();
    request.addEventListener("load", requestListener);
    request.open("GET", "/api/query?search=" + this.state.search);
    request.send();
  }

  clickHandler (item) {
    this.props.setValue(item);
  }

  render() {
    let results = this.state.results;

    let items = [];
    let query = null;
    let total = null;

    if (results) {
      query = results.query;
      total = results.totalResults;

      if (results.items) {
        items = results.items.map(item => {
          return (
            <div className={styles.result} key={item.name} onClick={() => {this.clickHandler(item)}}>
              <p>{item.name}</p>
            </div>
          )
        })
      }

    }


    return (
      <div className={styles.searchBar}>
        <form onSubmit={this.search} className={styles.form}>
        <input name="search" onChange = {this.changeHandler} value={this.state.search} />
        <button type="submit"> Submit </button>
        </form>
          <ResultLine query={query} amount={total} />
          <div className={styles.results}>
            {items}
           </div>
      </div>
    );
  }
}

class ResultLine extends React.Component {
  render() {
    if(this.props.query) {
      return <h4>Your search for '{this.props.query}' returned {this.props.amount} items:</h4>
    } else {
   
    }   
  }
}

export default Form;
