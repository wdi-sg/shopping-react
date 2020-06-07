import React, { useState } from "react";

function CartItem(props) {
  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="header">Items:</div>
          <div className="text">
            {/* {props.item.product.map((eachItem) => {
              return eachItem.name;
            })} */}
            {props.item}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="header">Price per piece</div>
          <div className="text">
            {/* {props.item.product.map((eachItem) => {
              return eachItem.price;
            })} */}
            {props.pricePerItem}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="header">Quantity purchase</div>
          <div className="text">{props.quantity}</div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="header">Total:</div>
          <div className="text">{props.value}</div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
