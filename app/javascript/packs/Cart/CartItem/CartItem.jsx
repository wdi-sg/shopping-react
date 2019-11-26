import React from 'react';

class CartItem extends React.Component {

    render() {

        return (
            <div>
                <h3>{this.props.item.name}</h3>
                <p>${this.props.item.price}</p>
            </div>
        );
    }

}

export default CartItem;