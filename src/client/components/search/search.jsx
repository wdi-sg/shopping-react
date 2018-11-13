import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

class Search extends React.Component {
  constructor() {
    super();
    this.sort = this.sort.bind( this );
  }


  sort(event){
    this.props.sort(event.target.value);
  }

  render() {
    console.log("THIS.PROPS IN SEARCH IS: ", this.props.result);
    let mappedResult = this.props.result.map((result, index) => {
        return <li key={index}>{result.name} ---- {result.salePrice} ---- {result.numReviews}</li>
    })
    return (
      <div>
        <h3>Search Items:</h3>
        <input className={styles.name} onChange={this.props.items}/>
        <br/>
        <button onClick={this.props.search}>search</button>
        <select onChange={this.sort}>
            <option>Sort by...</option>
            <option value="ascendPrice">Price(Ascending)</option>
            <option value="descendPrice">Price (Descending)</option>
            <option value="reviews">Number of reviews</option>
        </select>
        <h5>Search Results: </h5>
        <ol>
            {mappedResult}
        </ol>
      </div>
    );
  }
}

Search.propTypes = {
  search: PropTypes.func.isRequired,
  sort: PropTypes.func.isRequired,
  // value: PropTypes.string.isRequired
  items: PropTypes.func.isRequired,
  result: PropTypes.array.isRequired
};

export default Search;
