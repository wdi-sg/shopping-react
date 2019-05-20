import React from 'react';

import styles from './style.scss';
import Cart from '../cart/cart';

class Product extends React.Component {

  // addToCartHandler(event){
  //   console.log("viewing", event.target.value)
  //   // let chosen = this.state.product.push(this.state.items[event.target.value])
  //   this.state.product = []
  //   this.state.product.push(this.state.items[event.target.value])
  //   console.log([this.state.product])
  //   this.setState({product: this.state.product })
  // }

  render() {
    let display = <p>No item to display</p>

    if (this.props.product.length > 0) {
      display = this.props.product.map((item, index) => {
        return (
          <div key={index}>
            <h1>Displayed item</h1>
                <p>
                  Name: {item.name} <br/>
                  Price: {item.price} <br/>
                  Description: {item.description}
                </p>
                <button value={index}
                        onClick={this.props.addItemToCartHandler}>
                          Cart this shit
                </button>
          </div>
        )
      })
    }

    return (
      <div>
        {display}
        <Cart cart={this.props.cart}
              removeItemFromCartHandler={this.props.removeItemFromCartHandler}/>
      </div>
    );
  }
}

export default Product;
