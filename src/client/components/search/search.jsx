import React from 'react';

import styles from '../../style.scss';

import Search_Result from '../search_result/search_result';


class Search extends React.Component {
  render() {
    let searchList = this.props.currentProductList?this.props.currentProductList.map(x=>{
        return <Search_Result selectProduct={this.props.selectProduct}name={x.name}/>
    }) : "";
    return (
      <div className={styles["individual-container"]}>
          <h1>Search</h1>
          <input type="text" value={this.props.input} onChange={(e)=>{this.props.onChangeHandler(e)}}/>
          <select onChange={(e)=>this.props.doSort(e)}>
              <option value="name-asc">Name Asc</option>
              <option value="name-desc">Name Desc</option>
          </select>
          <br/><br/><br/>
          {searchList}
      </div>
    );
  }
}

export default Search;
