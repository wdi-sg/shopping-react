import React from 'react';
import axios from 'axios';
import CartItem from './cart/cartitem';
import Payment from './cart/payment';
import Divider from '@material-ui/core/Divider';

class Cart extends React.Component {
  constructor() {
    super()
    this.state = {
      product: '',
      qty:'',
      subtotal:0,
    }
  }
  putClickId(v) {
    //this.refs.putClickId = this.refs.putClickId(v)
    //v.id > ID , v.qty > qty
    console.table('cart>>>'+JSON.stringify(v))
    const url = '/products/'+v.id+'.json';
    axios.get(url,
      ).then((response) => {
        const data = response.data
        this.setState({
          product: data,
          qty:v.qty,
          subtotal:data.price * v.qty + this.state.subtotal
        })
      }).catch((error)=>{
        console.log(error);
    })
  }

  render() {
    console.log(this.state.subtotal)
    console.log("qty >>>>>>"+typeof this.state.qty)
    return (
      <div>
        <h2 className='border-b' style={{textAlign:'center'}}>Cart</h2>
        <CartItem
          imgurl={this.state.product.imgurl}
          name={this.state.product.name}
          price={this.state.product.price}
          qty={this.state.qty}
          subtotal={this.state.subtotal}/>
        <Divider/>
        <Payment
          price={this.state.product.price}
          qty={this.state.qty}
          subtotal={this.state.subtotal}/>
      </div>
    );
  }
}
export default Cart;