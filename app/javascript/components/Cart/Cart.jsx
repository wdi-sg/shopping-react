import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

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
                {item.name} ${item.price} <button onClick={()=>this.props.removeItem(i)} className="btn btn-sm btn-outline-danger"><DeleteIcon /></button>
            </li>)
        })
        return (<div>
            <h1>Cart</h1>
            <ul className="list-unstyled">
                {cartList}
            </ul>
            <h4>Total: ${totalPrice}</h4>
        </div>);
    }
}

export default Search;