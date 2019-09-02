import React from 'react';

import SubTotal from './subtotal';

import style from './style.scss';


class DisplayCart extends React.Component {
    constructor() {
        super();
        this.state = {
            cartItems: []
        }

        this.removeFromCart = this.removeFromCart.bind(this);
    }

    removeFromCart(e) {
        console.log(this.state.cartItems)
        let id = e.target.id;

        let cartItems = this.props.cartItems;
        cartItems.splice(id, 1);

        console.log(cartItems)

        this.setState({cartItems: cartItems});

      //  reactThis.setState({reactThis.setState{cartItems}});


    }

    render() {
        let cartItems = this.state.cartItems;

        if (cartItems.length === 0) {
            cartItems = this.props.cartItems;
        }
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
                    <SubTotal cartItems={this.state.cartItems} />
                </div>


            )
        }
    }
}

export default DisplayCart;