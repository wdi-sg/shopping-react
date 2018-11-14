import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.searchProduct = this.searchProduct.bind(this);
  }

  searchProduct(event) {
    const input = event.target.previousSibling.value;
    this.props.searchProduct(input);
    this.setState({ value: '' });
  }

 
  render() {
    const results = this.props.search.map((r) => {
      return <li key = {r.itemId}>{r.name} ${r.salePrice}</li>
    });

    return (
      <div >
        <h1>Search</h1>
        <input className = {styles.name} defaultValue = {this.state.value} />
        <button onClick = {this.searchProduct}>Search</button>
        <br/>
        <ul>{results}</ul>
      </div>
    );
  }
}

Search.propTypes = {
  searchProduct: PropTypes.func.isRequired,
};

export default Search;
