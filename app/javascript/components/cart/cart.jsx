import React, {Component} from 'react';

export default class Cart extends Component {

    render() {
        let cartProducts = this.props.products.map(product => {
            return(
                <div className='cart-product'>
                    <p>{product[0]}</p>
                    <p>${product[1]}</p>
                </div>
            )
        })

        return(
            <div className='col-5'>
                <h2>Cart</h2>
                <div className='cart'>
                    <h5 style={{borderBottom:'1px solid gainsboro', 
                                paddingBottom:'10px'}}>
                        Order Summary
                    </h5>
                    <div>
                        {cartProducts}
                    </div>
                    <div className='cost'>
                        <p>Sub Total: ${this.props.subtotal}</p>
                        <p>GST: ${(this.props.subtotal * 0.17).toFixed(2)}</p>
                        <p>Shipping: $7 (flat rate)</p>
                        <h6 style={{borderTop:'1px solid gainsboro', 
                                paddingTop:'10px'}}>
                            Total: <strong>${(this.props.subtotal * 1.17 + 7).toFixed(2)}</strong>
                        </h6>
                    </div>
                </div>
            </div>
        )
    }
}