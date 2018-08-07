import React from 'react';

import PropTypes from 'prop-types';

import styles from './style.scss';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }
  
  render() {
    const results = this.props.searchProduct
    const products = results.items
    console.log('Results from Counter.jsx', products)
    // const allProducts = products.map((product)=>{
    //   return(
    //     <div>
    //       <h6>Product</h6>
    //         <li>{product.name}</li>
    //       {/* <h6>Description</h6>
    //         <li>{product.shortDescription}</li>
    //       <h6>Price</h6>
    //         <li>{product.salePrice}</li> */}
    //     </div>
    //   )
    // })
    return (
      <div className={styles.box}>
        <ul>
          {/* {allProducts} */}
        </ul>
      </div>
    );
  }
}

Counter.propTypes = {
  message: PropTypes.string.isRequired
};

export default Counter;
