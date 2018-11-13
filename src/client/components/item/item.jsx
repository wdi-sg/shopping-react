import React from 'react';

import styles from './style.scss';

class Item extends React.Component {
  constructor() {
    super();
  }

  render() {
    let item = this.props.item;
        if (item) {
            return (
                <div>
                    <h3>{item.name}</h3>
                      <p>
                      About:<br/>
                      {item.shortDescription}
                      </p>

                      <p>
                        Price:<br/>
                        ${item.salePrice}
                      </p>
                      <button onClick={() => this.props.addToCart(item)}>Add to cart</button>
                </div>
            )
        }
        else {
            return <span/>

        }
    }
}

export default Item;
