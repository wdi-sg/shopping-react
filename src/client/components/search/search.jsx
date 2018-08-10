import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

class Search extends React.Component {

  add(event){
    if(event.key === 'Enter'){
      alert('Adding....');
      this.props.formSubmit();
   }
  }

  render() {
    const {showAllProduct} = this.props;
    const products = showAllProduct.map((product, index)=>{
      return(
        <button onClick={() => this.props.displayProduct(index)} key={product.itemId}>
          <img src={product.mediumImage}/>
        </button>
      )
    });

    return (
      <div className={styles.box}>
        <input 
          className={styles.name} 
          placeholder='Search Item ...'
          onChange={this.props.changeHandler}
          onKeyPress={(event) => this.add(event)}
        />

        <button type='button' onClick={this.props.formSubmit}>Search</button>
        
        <div class='products'>
          {products}
        </div>

      </div>
    );
  }
}

export default Search;
