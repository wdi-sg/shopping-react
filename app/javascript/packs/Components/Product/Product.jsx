import React from 'react';
import PropTypes from 'prop-types';
import Description from './Description.jsx'
import Price from './Price.jsx'
import styles from './styles.scss';

function Product(props) {
  function handleClick(e) {
    props.onAddToCart(e)
  }

  const productDetails = props.showProduct ? (
    <div>
      <p>Product Details</p>
      <div className="result">
        <p>Name:{props.showProduct.name}</p>
        <img className="img-fluid" src={props.showProduct.image_url} alt="" />
      </div>
      <Description description={props.showProduct.description}/>
      <Price price={props.showProduct.price}/>
      <button onClick={handleClick} id={props.showProduct.id}>Add To Cart</button>
    </div>
  ) : (
    <p>Product Details</p>
  );
  return <div className="productCont container col-3">{productDetails}</div>;
}

Product.propTypes = {
  name: PropTypes.string,
  image_url: PropTypes.string,
  description: PropTypes.string
}

export default Product;
