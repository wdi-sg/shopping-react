import React from "react";
// import ReactDOM from "react-dom";

export default class Cart extends React.Component {
  render() {
    let cartList = this.props.cart.map(product => {
      return (
        <div className="col-md-4 col-md-offset-4">
          <img src={product.image_url} />
          <strong>Name:</strong>
          <p>{product.name}</p>
          <strong>Description:</strong>
          <p>{product.description}</p>
          <strong>Price($):</strong>
          <p>{product.price}</p>
        </div>
      );
    });
    // console.log(cartList);

    // let cartPrice = this.props.cartList.map([CartList.product.price] => { function getTotal(total, num) {
    //     return total + Math.round(num);
    //   }
    //     document.getElementById("subtotal").innerHTML = numbers.reduce(getTotal, 0);})

    return (
      <div>
        <h3>Items in cart: {cartList.length}</h3>
        <ol>{cartList}</ol>
        {/* <p>Subtotal: <span id="subtotal"></span></p> */}
      </div>
    );
  }
}
