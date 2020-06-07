import React from 'react';
import Subtotal from './payment/subtotal';
import Shipping from './payment/shipping';
import Gst from './payment/gst';
import Total from './payment/total';

let subtotal = 0;
class Payment extends React.Component {
  constructor(){
    super()
    this.state = {
      ship:'',
    }
  }
  liftShipping(v) {
    console.log("shippinggg"+v)
    this.setState ({
      ship:parseInt(v),
    })
  }

  render() {
    let object = {
      price: this.props.price,
      qty: parseInt(this.props.qty),
      orderprice: this.props.price * parseInt(this.props.qty),
      subtotal: this.props.subtotal,
    }

    let totalprice = (object.subtotal * 1.07) + this.state.ship
    console.log("tttttttpppppp"+totalprice)
    console.log("subtotal"+subtotal)
    console.log("subtotal"+(subtotal*1.07))


    return (
      <div>
        <h2 className='border-b' style={{textAlign:'center'}}>Payment</h2>
        <Subtotal totalprice={object.subtotal}/>
        <Shipping
        liftshipping={(v) => {this.liftShipping(v)}}
        totalprice={object.orderprice}/>
        <Gst totalprice={object.subtotal}/>
        <Total totalprice={totalprice}/>
      </div>
    );
  }
}
export default Payment;