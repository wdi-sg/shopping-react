import React from 'react';

import styles from '../../style.scss';

class Cart extends React.Component {

  render() {
    let subTotal = 0;
    let cartList = this.props.cartList.map((x,index)=>{
        subTotal += parseFloat(x.price.replace('$', ''))
        return <div className={styles["single-cart"]}><span>{x.name}</span> <span className={styles.delete}><box-icon name='x'onClick={(e)=>{this.props.removeThis(e,index)}}></box-icon></span></div>
    })
    let GST = subTotal * 0.17
    let shipping = 7
    let total = subTotal + GST + shipping
    return (
        <div className={styles["individual-container"]}>
            <h1>Cart</h1>
            <div className={styles["cart-list"]}>
                {cartList}
            </div>
            <br/><br/><br/>
            <table className={styles["cart-table"]}>
                <tbody>
                    <tr>
                        <th scope="row">Sub-total</th>
                        <td>$ {subTotal.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <th scope="row">Shipping ($7)</th>
                        <td>$ {shipping.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <th scope="row">GST (17%)</th>
                        <td>$ {GST.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <th scope="row">Total</th>
                        <td>$ {total.toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
  }
}

export default Cart;
