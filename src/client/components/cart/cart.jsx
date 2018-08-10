import React from 'react';

import styles from './style.scss';

class Cart extends React.Component {
    render(){
    const {cart} = this.props;
    const cartItems = cart.map((item, index) => {
    return(
        <div key={index}>
            <h6>Product</h6>
                <p>{item.name}</p>
            <div>
            <h6>Price: </h6>
                <p>{item.salePrice}</p>
                <button onClick={()=>addFromCart()}>+</button>
                <button onClick={()=>removeFromCart()}>-</button>
            </div>
        </div>
        )
    })
    
    return(
        <div className={styles.box}>
            <div className='container'>
            {cartItems}
            </div>
        </div>
    )};
}

export default Cart;