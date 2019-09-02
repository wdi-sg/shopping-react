import React from 'react';

import styles from '../../style.scss';

import Search_Result from '../search_result/search_result';


class Search extends React.Component {
  render() {
    let searchList = this.props.products? this.props.products.products.filter(x=>x.name.toLowerCase().includes(this.props.input.toLowerCase())).map(x=>{
        return <Search_Result selectProduct={this.props.selectProduct}name={x.name}/>
    }) : null;
    return (
      <div className={styles["individual-container"]}>
          <h1>Search</h1>
          <input type="text" value={this.props.input} onChange={(e)=>{this.props.onChangeHandler(e)}}/>
          <br/><br/><br/>
          {searchList}
      </div>
    );
  }
}

export default Search;
