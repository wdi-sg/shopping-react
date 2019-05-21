import React from 'react';

import styles from './style.scss';

class Cart extends React.Component {

  // cartItemsHandler(event){
  //   // console.log("viewing", event.target.value)
  //   console.log('delete this shit')
  // }

  render() {
    let cartItems = <p>Cart is empty</p>
    let subtotal = 0
    let shipping = 7
    let total = 0
    let gst = 0

    if (this.props.cart.length > 0) {
      cartItems = this.props.cart.map((item, index) => {
        subtotal = subtotal + parseFloat(item.price.replace('$', ''))
        subtotal = parseFloat(subtotal.toFixed(2))
        gst = (subtotal + shipping) / 100 * 7
        gst = parseFloat(gst.toFixed(2))
        total = subtotal + shipping + gst
        total = parseFloat(total.toFixed(2))
        return (
          <div key={index}>
                <p>
                  Name: {item.name} <br/>
                  Price: {item.price} <br/>
                  Description: {item.description}
                </p>
                <button value={index} onClick={this.props.removeItemFromCartHandler}>Remove this shit</button>
          </div>
        )
      })
    }

    return (
      <div>
        <h1>Cart item</h1>
        {cartItems}
        <h2>Total</h2>
        Subtotal: ${subtotal} <br/>
        Shipping: ${shipping} <br/>
        GST 7%: ${gst} <br/>
        Total: ${total}
      </div>
    );
  }
}

export default Cart;
