import React from 'react';
import Item from '../item/item';

const Cart = ({cartItems, onSelect, subtotal, shipping, gst, total}) => (
  <div>
    <h2>Cart</h2>
    {cartItems.map((item) => <Item key={item.itemId} itemId={item.itemId} name={item.name} onSelect={onSelect} />)}
    <p>
      <strong>Sub total: </strong>
      {subtotal}
    </p>
    <p>
      <strong>Shipping: </strong>
      {shipping}
    </p>
    <p>
      <strong>GST: </strong>
      {gst}
    </p>
    <p>
      <strong>Total: </strong>
      {total}
    </p>
  </div>
);

export default Cart;
