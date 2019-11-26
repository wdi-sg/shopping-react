import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';

class Search extends React.Component{
    render() {
        let {cart} = this.props
        let totalPrice = cart.reduce(function (accumulator, item) {
            return accumulator + item.price;
        },0);
        let cartOutput = {
            item: [],
            quantity: []
        };
        let cartList = cart.map((item,i)=>{
            return (<li key={i} className="lead mt-1">
                {item.name} ${item.price} <Fab size="small" color="secondary" onClick={()=>this.props.removeItem(i)}><DeleteIcon /></Fab>
            </li>)

        })
        return (<div>
            <h1>Cart</h1>
            <hr/>
            <ul className="list-unstyled">
                {cartList}
            </ul>
            <hr/>
            <h5>Subtotal: ${totalPrice}</h5>
            <h5>Shipping: ${Math.ceil(totalPrice/10000) * 7}</h5>
            <h5>GST: ${(totalPrice * .07).toFixed(2)};</h5>
            <h4>Total: ${(totalPrice * 1.07 + Math.ceil(totalPrice/10000) * 7).toFixed(2)}</h4>
        </div>);
    }
}

export default Search;