import React from 'react';
import Item from '../item/item';

const Cart = ({cartItems, onSelect}) => (
  <div>
    <h2>Cart</h2>
    {cartItems.map((item) => <Item key={item.itemId} itemId={item.itemId} name={item.name} onSelect={onSelect} />)}
  </div>
);

export default Cart;
