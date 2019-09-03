import React from 'react';
import styles from '../../style.scss';


class Cart extends React.Component{


    render(){
        console.log('in cart Component');
        console.log(this.props.cartItems)

        if(this.props.cartItems){

            let cartItemList = this.props.cartItems.map((item) => {
                return(
                    <tr>
                        <td>{item.name}</td><td>{item.price}</td>

                    </tr>

                )
            })


            return(
                <div className={styles.cart}>
                    <h1>Cart</h1>
                    <table>
                        {cartItemList}
                    </table>
                </div>
            )
        } else{
            return(
                <div className={styles.cart}>
                    <h1>Cart</h1>
                </div>
            )
        }

    }


}

export default Cart
