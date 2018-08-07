import React from 'react';
import {hot} from 'react-hot-loader';

class Cart extends React.Component {
  render() {
     let items = this.props.items.map( (item, index) => (
      <li key={index}>{item.name}</li>
    ))

    let totalPrice = 0;

    for (let i = 0; i < this.props.items.length; i++) {
      totalPrice += this.props.items[i].salePrice;
    }

    return(
      <div>
        <p>I am a cart item</p>
        <ul>
          {items}
        </ul>
        <p>
          Price: {totalPrice}
        </p>
      </div>
    )
  }
}

export default hot(module)(Cart);
