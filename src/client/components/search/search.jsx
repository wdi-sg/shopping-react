import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../style.scss';
/* eslint react/prop-types: 0 */
class Search extends React.Component {

 
  // constructor() {
  //   super();
  //   this.state = {
  //     products: this.props.products
  //   };
  // }

  render() {
  
     let productList = this.props.products ? this.props.products.map(product => {
         // eslint-disable-next-line react/jsx-key
         return <div id={product.id} onClick={(e)=>{this.props.selectProduct(e)}}>
                    {product.name}
                </div>

         

    }) : "";


    return (
      
      <div>
        {productList}
      </div>
    );

                                                                                       
}
}


export default Search;
