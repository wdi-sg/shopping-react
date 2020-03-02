import React from 'react'
import axios from 'axios';

export default class Search extends React.Component{
    constructor(){
        super()
    }
    removeProduct(index){
        this.props.removeProduct(index.target.value);
    }
    render(){
        let subtotal = 0;
        let shipping = 0;
        let total = 0;
        let gst = 0;
        let display = this.props.product.map((item, index)=>{
            subtotal += parseFloat(item.price);
            return <div className="row mb-1 mt-1">
            <div className="col">{item.name}</div><div className="col"><button className="btn btn-danger" onClick={(e)=>{ this.removeProduct(e) }} value={index}>Remove</button></div></div>;
        });
        if(this.props.product.length > 0)
        {
            shipping = 7;
            gst = subtotal*7/100;
            total += shipping + gst + subtotal;
        }
        return(
            <div>
                <div className="col">
                    <h1>Cart</h1>
                    {display}
                    <div className="row mt-3">
                        sub total: {subtotal.toFixed(2)}
                    </div>
                    <div className="row mt-1">
                        Shipping: {shipping.toFixed(2)}
                    </div>
                    <div className="row mt-1">
                        GST: {gst.toFixed(2)}
                    </div>
                    <div className ="row mt-1">
                        total: {total.toFixed(2)}
                    </div>
                </div>
            </div>
            );
    }
}