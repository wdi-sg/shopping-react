import React from 'react';

import styles from './style.scss';

class Product extends React.Component {

  viewItemHandler(event){
    console.log("viewing", event.target.value)
  }

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
                <button>Cart this shit</button>
          </div>
        )
      })
    }

    return (
      <div>
        {display}
      </div>
    );
  }
}

export default Product;
