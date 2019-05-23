import React from 'react';


class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
        };

    }

    renderIfCartEmptyOrNot() {
        if (this.props.shoppingCart.length !== 0) {
            return (
                <React.Fragment>

                <h4>Subtotal:
                <span> ${this.props.subTotal.toFixed(2)}</span>
                </h4>
                <br/>

                <h4>Shipping:
                <span> ${"7"}</span>
                </h4>
                <br/>

                <h4>GST:
                <span> {"7%"}</span>
                </h4>
                <br/>

                <h4>Total:
                <span> ${this.props.total.toFixed(2)}</span>
                </h4>
                <br/>
                </React.Fragment>
                )
        }
        return <React.Fragment></React.Fragment>
            }

    render() {
        console.log(this.props.shoppingCart.length);

        const shoppingCartItems = this.props.shoppingCart.map( (item,index) => {
            return (
                <React.Fragment>
                    <li key={index}>{item.name}</li>
                </React.Fragment>
           )
        })

        return (
            <React.Fragment>
            <div>
                { shoppingCartItems }
            </div>
               <br/>
            {this.renderIfCartEmptyOrNot()}
            </React.Fragment>
        );
    }
 }

export default Cart;