import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.scss';
const axios = require('axios');

class Form extends React.Component {
  constructor() {
    super();
    this.changeHandler = this.changeHandler.bind(this);
    this.enterHandler = this.enterHandler.bind(this);
    this.state = {
      search: "",
      allResults: [],
    };
  }


  changeHandler(event) {
    this.setState({ search: event.target.value })
    console.log(event.target.value)
  }

  enterHandler(event) {
    if (event.keyCode === 13) {
      console.log("hi", event.target.value)

      const url = '/query?search=';

      axios.get(`${url}${event.target.value}`)
        .then(response => {
          console.log(response.data);
          this.setState({ allResults: response.data.items })
        })
        .catch(error => {
          console.log("error", error);
        });


    }

  }


  render() {
    return (
      <div>
        <h2>Search Walmart</h2>
        <input className={styles.name} placeholder="Search" onChange={this.changeHandler} onKeyDown={this.enterHandler} value={this.state.search} />
        <AllList allResult={this.state.allResults} />
      </div>

    );
  }
}

class AllList extends React.Component {
  constructor() {
    super();
    this.allResult = this.allResult.bind(this);
  }

  allResult() {
    console.log(this.props.allResult);
    
    if (this.props.allResult.length > 0) {
      return (this.props.allResult.map(item => {
        return (
          <div>
            <h5>{item.name}</h5>
            <img src={item.thumbnailImage} />
            <p>
            <small>Price: ${item.salePrice}</small> <br/>
            <small> Shipping Price: ${item.standardShipRate}</small><br/>
            <small>Customer Rating: <img src={item.customerRatingImage}/></small>
            </p>
          </div>

        );
      }))
    } else {
      return "No results found.";
    }
  }

  render() {

    return (
      <div>
        <h3>Results</h3>
        {this.allResult()}
      </div>
    )
  }
}

AllList.propTypes = {
  allResult: PropTypes.array
};

export default Form;
