import React from 'react';

import PropTypes from 'prop-types';

import styles from './style.scss';
import main_styles from '../../style.scss';

const DisplayName = (props) => {
  return <h6><strong>{props.name}</strong></h6>;
}

const DisplayImage = (props) => {
  return <img src={props.img}/>;
}

const DisplayDescription = (props) => {
  return <p><small>{props.description}</small></p>;
}

const DisplayPrice = (props) => {
  if (props.price) {
    return <p>${props.price}</p>;
  } else {
    return <div></div>;
  }
}

const AddToCart = (props) => {
  if (props.cart) {
    return <a href={props.cart}>Add To Cart</a>;
  } else {
    return <div></div>;
  }
}
class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      banana: 'sneakers',
      counters : []
    };

  }



  render() {
    return (
      <div className="col text-center">
        <DisplayName name={this.props.product.name} />
        <DisplayImage img={this.props.product.largeImage} />
        <DisplayDescription description={this.props.product.shortDescription} />
        <DisplayPrice price={this.props.product.salePrice} />
        <AddToCart cart={this.props.product.addToCartUrl} />
      </div>
    );
  }
}

Counter.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Counter;