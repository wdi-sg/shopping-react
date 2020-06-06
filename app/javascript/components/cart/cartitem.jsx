import React from 'react';

let display = [];
let priceTotal = 0;

class CartItem extends React.Component {

  render() {

    let cartlist;
    let object = {
      name: this.props.name,
      price: this.props.price,
      qty: parseInt(this.props.qty),
      totalprice: this.props.price * parseInt(this.props.qty),
    }

    if(this.props.name) {
      display.push(object)
      priceTotal = this.props.price * parseInt(this.props.qty) + priceTotal
    }

    console.log("Total Cost>>>: "+priceTotal)

    cartlist = display.map((list,index)=> {
        return (
          <div>
            <span>name: {list.name}</span>
            <span>price: {list.price}</span>
            <span>qty: {list.qty}</span>
            <span>totalprice: {list.totalprice}</span>
          </div>
        )
      });

    return (
      <div>
        <h2>CartItem</h2>
          <div>
            {cartlist}
            Total price: {priceTotal}
          </div>
      </div>
    );
  }
}
export default CartItem;