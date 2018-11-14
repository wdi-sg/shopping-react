import React from 'react';

class Cart extends React.Component {
  constructor() {
    super();
  }

  render() {
    let cartNotEmpty = this.props.cartItems;

    if (cartNotEmpty.length >0){
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
          Total: ${this.props.amt}
        </div>
      )
    }
    else{

      return(
        <span />
        )
      }
    }
}

export default Cart;
