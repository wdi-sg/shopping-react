import React from 'react';

class Cart extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
      Cart:
       <ul>
            {this.props.cartItems.map((item, i) => (
                <li key={i} >
                {item.name}
                </li>
          ))}
        </ul>
        Total:
        {this.props.amt}
      </div>
      )
    }
}

export default Cart;
