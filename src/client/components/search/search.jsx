import React from 'react';
// import PropTypes from 'prop-types';
import styles from './style.scss';

class Search extends React.Component {

  render() {

    // console.log(this.props.searchResults)
    let searchResults = this.props.searchResults;
        // do a map to print the list
        let allProducts = searchResults.map((obj, index) => {
            return <li key={index}  >
                    {obj.name}
                </li>
        }) // end of map

    return (
      <div className={styles.search_wrapper}>

       <div>
            <input type="search" id="search" onChange={this.props.handleInput} defaultValue={this.props.searchWord} />
            <button onClick={this.props.makeAjaxCall} >Search</button>
        </div>

        <div className="searchList-container">
            <ul id="searchList" >
                {allProducts}
            </ul>
        </div>

      </div>
    );
  }
}

export default Search;
