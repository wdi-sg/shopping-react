import React from 'react';

import styles from './style.scss';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      searchTerm: '',
      searchResult: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const reactThis = this;

    function reqListener() {
      const data = JSON.parse(this.responseText);
      reactThis.setState({ searchResult: data.items });
    }

    const oReq = new XMLHttpRequest();
    oReq.addEventListener('load', reqListener);
    oReq.open('GET', `/api/query?search=${this.state.searchTerm}`);
    oReq.send();
  }

  render() {
    let searchResults;

    if (this.state.searchResult) {
      searchResults = this.state.searchResult.map(resultItem =>
        <div key={resultItem.name}>
          <p>{resultItem.name}</p>
        </div>);
    }

    return (
      <div>
        <p>Search product: {this.state.searchTerm}</p>
        <form onSubmit={this.handleSubmit}>
          <input className={styles.name} onChange={this.handleChange}
            value={this.state.searchTerm} />
          <input type="submit" value="Go" />
        </form>
        {searchResults}
      </div>
    );
  }
}

export default Form;
