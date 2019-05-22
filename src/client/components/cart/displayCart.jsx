import React from 'react';

import style from './style.scss';

class DisplayCart extends React.Component {
    constructor() {
        super();

        this.setCartItems = this.removeFromCart.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
    }

    setCartItems() {
        this.setState(this.props.cartItems)
    }

    removeFromCart(e) {
        let id = e.target.id;

        let cartItems = this.props.cartItems;
        cartItems.splice(id, 1);

        console.log(cartItems)


    }

    render() {
        //setCartItems()

        let cartItems = this.props.cartItems;
        //let cartItems = this.state.cartItems;

        if (!cartItems.length) {
            return (<p></p>)

        } else {

            let indvItems = cartItems.map((obj, index) => {
                return (<div className={style.cartContainer} >
                        <p>{obj.name}</p>
                        <p>{obj.price}</p>

                        <button type="button" id={index} onClick={this.removeFromCart} >Remove</button>
                    </div>
                )
            })
            return (<div>
                    {indvItems}
                </div>


            )
        }
    }
}

export default DisplayCart;