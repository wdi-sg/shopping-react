import React from 'react';
// import PropTypes from 'prop-types';
import styles from './style.scss';

class Search extends React.Component {

  render() {

        let allProducts = this.props.searchResults.map((obj, index) => {
            return <div key={index} onClick={(event)=>{this.props.selectedProduct(event)}}>
                    {obj.name}
                </div>
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
