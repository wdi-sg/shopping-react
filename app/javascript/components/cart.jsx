import React from 'react';
import axios from 'axios';
import CartItem from './cart/cartitem';
import Payment from './cart/payment';

class Cart extends React.Component {
  constructor() {
    super()
    this.state = {
      product: '',
      qty:'',
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
        this.setState({ product: data, qty:v.qty })
      }).catch((error)=>{
        console.log(error);
      })
  }



  render() {

    console.log(this.state.product.name)
    console.log("qty >>>>>>"+this.state.qty)
    return (
      <div>
        <h2 className='border-b'>Cart</h2>
        <CartItem
          name={this.state.product.name}
          price={this.state.product.price}
          qty={this.state.qty}/>
        <Payment
          price={this.state.product.price}
          qty={this.state.qty}/>
      </div>
    );
  }
}
export default Cart;