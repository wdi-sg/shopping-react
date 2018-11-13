import React from 'react';

class Cart extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
       <ul>
            {this.props.cartItems.map((item, i) => (
                <li key={i} >
                {item.name}
                </li>
          ))}
        </ul>
      )
    }
}

export default Cart;
