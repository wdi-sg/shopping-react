import React from 'react';
import Subtotal from './payment/subtotal';
import Shipping from './payment/shipping';
import Gst from './payment/gst';
import Total from './payment/total';


class Payment extends React.Component {

  render() {

    let object = {
      price: this.props.price,
      qty: parseInt(this.props.qty),
      totalprice: this.props.price * parseInt(this.props.qty),
    }



    return (
      <div>
        <h2>Payment</h2>
        <Subtotal totalprice={object.totalprice}/>
        <Shipping totalprice={object.totalprice}/>
        <Gst totalprice={object.totalprice}/>
        <Total totalprice={object.totalprice}/>
      </div>
    );
  }
}
export default Payment;