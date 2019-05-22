import React from 'react';

class DisplayProduct extends React.Component {

    render() {
        let currentObj = this.props.currentProduct;

        if (currentObj === undefined || currentObj === null) {
           return ( <p></p>
            )

        } else {
            return ( <div>
                    <p>{currentObj.name}</p>
                    <p>{currentObj.description}</p>
                    <p>{currentObj.price}</p>

                    <button type="button" onClick={this.props.handleAddToCart}>Add to cart</button>

                </div>
            )
        }
    }
}

export default DisplayProduct;