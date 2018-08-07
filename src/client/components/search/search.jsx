import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

class Search extends React.Component {

/*-------------OnEnter function that sends the search request--------------------------------------------------- */
  add(event){
    if(event.key === 'Enter'){
      alert('Adding....');
      this.props.formSubmit();
   }
  }
/*---------------------------------------------------------------- */
  render() {
    // const results = this.props.search.results.map((results, index)=>{
    //   <Result 
    //     key={index} 
    //     results={results} 
    //     // showProduct={this.props.showProduct} 
    //     productId={index}
    //   />
    // })
    return (
      <div className={styles.box}>
        <input 
          className={styles.name} 
          placeholder='Search Item ...'
          onChange={(e)=>this.props.handleFormInput(e)}
          onKeyPress={(event) => this.add(event)}
        />
        <button type='button' onClick={this.props.formSubmit}>Search</button>
        {/* {results} */}
      </div>
    );
  }
}

export default Search;
