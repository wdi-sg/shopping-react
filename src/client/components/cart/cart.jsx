import React from 'react';

import PropTypes from 'prop-types';

import styles from './style.scss';
import main_styles from '../../style.scss';

class Cart extends React.Component {
    constructor(){
      super()
      this.state={
        shipping: 7,
        gst: 0.07,
      }
    }


    render() {
      if (this.props.cart.length > 0){
        var itemList = this.props.cart.map((obj, index)=>{
          return (
            <li key={index} value={obj}>{obj.name}</li>
          )
        })
        var initialValue = 0
        var subtotal = this.props.cart.reduce(function(total, currentValue){
          let temp = parseFloat(currentValue.price.replace(/[$,]+/g,""))
          let result = parseFloat(total)+parseFloat(temp)
          return (result.toFixed(2))
        },initialValue);

        var gst = (subtotal * this.state.gst).toFixed(2)
        var total = (parseFloat(subtotal) + parseFloat(this.state.shipping) + parseFloat(gst)).toFixed(2)

      }else{
        var itemList = ""
        var subtotal = ""
        var gst = ""
        var total = ""
      }

    return (
      <div className={main_styles.panel}>Cart
      <div>
        <ul>
          {itemList}
        </ul>
      </div>
      <div>
        <p>subtotal</p>
        ${subtotal}
      </div>
      <div>
        <p>shipping</p>
        ${this.state.shipping}
      </div>
      <div>
        <p>GST</p>
        ${gst}
      </div>
      <div>
        <p>Total</p>
        ${total}
      </div>
      </div>
    );
  }
}



export default Cart;
