import React from 'react';

class Cart extends React.Component {

  render() {
    return (
        <div>
        <div> Shopping Cart </div>
        <div>
            <ul className="list-group">
            {this.props.cart.map((product, index) => (
                    <li className="list-group-item" key={product.id} value = {product.id}>
                    {product.name}
                     </li>
                ))}
             </ul>
            </div>
        <div> Total Price </div>


        </div>
    );
  }
}

export default Cart;