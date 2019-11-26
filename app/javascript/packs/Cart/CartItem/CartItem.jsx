import React from 'react';

class CartItem extends React.Component {

    render() {

        return (
            <div>
                <h3>{this.props.item.name}</h3>
            </div>
        );
    }

}

export default CartItem;