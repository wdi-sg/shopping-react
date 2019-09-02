import React from 'react';

import styles from '../../style.scss';


class Search_Result extends React.Component {
  render() {
    return (
        <div className={styles["search-list"]} onClick={(e)=>{this.props.selectProduct(e)}}>{this.props.name}</div>
    );
  }
}

export default Search_Result;
