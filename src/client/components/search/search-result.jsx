import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

class SearchResult extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    let results = <p>No products found</p>;
    if (this.props.products.length) {
      results = this.props.products.map((product,index) => {
        return (<p className={styles.product} key={index} onClick={(e)=>{this.props.selectProduct(e,index)}}>{product.name}</p>)
      });
    }
    return (
      <div>
        {results}
      </div>
    );
  }
}
SearchResult.propTypes ={
  products: PropTypes.array,
  selectProduct: PropTypes.func,
};
export default SearchResult;
