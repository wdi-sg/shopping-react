import React from 'react';

import PropTypes from 'prop-types';

import styles from './style.scss';
import main_styles from '../../style.scss';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      text: 'Cart',
      counters : []
    };
      // this.handleClick = this.handleClick.bind(this);
  }

    // handleClick(){
    //     let num = Math.random();

    //     const newArray = [num, ...this.state.counters];

    //     this.setState({ counters : newArray });
    // }

  render() {
    return (
      <div>
          <p className={styles.desc}>
            {this.props.message} : {this.state.text}
          </p>
          {this.state.counters.map((counter)=>{ return <p>{counter}</p>})}
      </div>
    );
  }
}

Cart.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Cart;