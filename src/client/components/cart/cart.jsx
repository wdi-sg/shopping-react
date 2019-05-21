import React from 'react';
import Result from '../result/result';

class Cart extends React.Component {
    render() {
        const elements = this.props.cart.map( (item, index) => {
            return (
                    <div key={ item.id }>
                        <p>Name:<br/>{ item.name }</p>
                        <p>Description:<br/>{ item.description }</p>
                        <p>Price:<br/>{ item.price }</p>
                        <button
                            id={ item.id }
                            onClick= { (e) => { this.props.removeProductToCartHandler(e) } }
                        >
                            Remove from Cart
                        </button>
                    </div>
                );
            });

        return (
            <div>
                <h4>Shopping Cart</h4>
                { elements }
            </div>
        );
    }
}

export default Cart;