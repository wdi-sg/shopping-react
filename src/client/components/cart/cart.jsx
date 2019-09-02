import React from 'react';

import styles from './style.scss';

class Cart extends React.Component {
  

  render() {
    const cart = this.props.cart;
    console.log(cart)
    const subtotal= this.props.subtotal;
    console.log(subtotal)
    var shipping =0;
    if (cart.length > 0){
      shipping = 7;
    }else {
      shipping = 0;
    }
    
    const gst = subtotal * 7 /100
    const total = subtotal + shipping + gst;
    return (
      <div>
       

        <ol className={styles.name}>
            {cart.map(product => (
              <li key={product.id}>
               {product.name}:{product.price}
              </li>
            ))}
        </ol>
        <p>Subtotal:{subtotal} </p>
        <p>Shipping: {shipping}</p>
        <p>GST: {gst}</p>
        <p>total: ${total}</p>

      
      
      </div>
    );
  }
}

export default Cart;
