import React from 'react';

class DisplayCart extends React.Component {
    constructor() {
        super();
        this.state = null
    }
    render() {
        let cartItems = this.props.cartItems;

        if (!cartItems.length) {
            return (<p></p>)

        } else {

            let indvItems = cartItems.map(obj => {
                return (<li>
                        {obj.name}
                    </li>
                )
            })
            return (<ul>
                    {indvItems}
                </ul>
            )
        }
    }
}

export default DisplayCart;