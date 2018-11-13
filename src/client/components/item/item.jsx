import React from 'react';

import styles from './style.scss';

class Item extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
        <p>
      {this.props.item.name}
      </p>
    );
  }
}

export default Item;
