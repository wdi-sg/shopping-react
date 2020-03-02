import React from 'react'
import axios from 'axios';

export default class Search extends React.Component{
    constructor(){
        super()
    }

    render(){
        let total = 0;
        let display = this.props.product.map((item)=>{
            total += parseFloat(item.price);
            return <div class="row">{item.name}</div>;
        });

        return(
            <div>
                <div className="col">
                    <h1>Cart</h1>
                    {display}
                    <div class="row">
                    Total: {total.toFixed(2)}
                    </div>
                </div>
            </div>
            );
    }
}