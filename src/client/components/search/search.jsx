import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
    this.searchItem = this.searchItem.bind(this);
    this.sort = this.sort.bind(this);
    this.display = this.display.bind(this);
  }

  searchItem(event) {
    const input = event.target.previousSibling.value;
    this.props.search(input);
    this.setState({value: ''});
  }

  sort(event) {
    const sortby = event.target.value;
    this.props.sort(sortby);
  }

  display(e) {
    this.props.display(e);
  }

  render() {
    const result = this.props.list.map((e) => (
      <div key={e.itemId} onClick={() => this.display(e)}>
        {e.name} ${e.salePrice}
      </div>
    ));
    return (
      <div>
        <h1>Search</h1>
        <input className={styles.name} defaultValue={this.state.value} />
        <button onClick={this.searchItem}>Search</button>
        <br />
        <select onChange={this.sort}>
          <option>Sort by price</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <br />
        <br />
        <div>{result}</div>
      </div>
    );
  }
}

Search.propTypes = {
  search: PropTypes.func.isRequired,
  sort: PropTypes.func.isRequired,
  display: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Search;
