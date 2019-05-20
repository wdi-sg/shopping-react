import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

class Calculation extends React.Component {

  render() {


    return (
        <React.Fragment>

              <p> Subtotal: ${this.props.subtotal} </p>
              <p> Shipping: FREE OF CHARGE</p>
              <p> GST: ${this.props.gst} </p>
              <p> Total: ${this.props.total} </p>
        </React.Fragment>
    );
  }
}

export default Calculation;