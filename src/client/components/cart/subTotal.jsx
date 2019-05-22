import React from 'react';

class SubTotal extends React.Component {

    render() {
        let cartItems = this.props.cartItems;

        if (!cartItems.length) {
            return (<p></p>)

        } else {

            let subTotal = 0;
            let indvItems = cartItems.map(obj => {
                let price = Number(obj.price.replace("$", ''))
                subTotal = subTotal + price

                return (<p></p>
                )
            })

            let gst = (subTotal * 0.07);
            let shipping = 7.00;

            let total = subTotal + gst + shipping;

            return (<div>
                    {indvItems}
                    <p>Subtotal: {subTotal.toFixed(2)}</p>
                    <p>GST: {gst.toFixed(2)}</p>
                    <p>Shipping: {shipping}</p>


                    Total: {total.toFixed(2)}
                </div>


            )
        }
    }
}

export default SubTotal;