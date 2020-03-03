import React from 'react'
import axios from 'axios';

export default class Search extends React.Component{
    constructor(){
        super()
    }

    changeInput = (event) =>{
        this.props.changeInput(event.target.value);
    }

    showProduct(e){
    this.props.showProduct(e.target.value);
    }
    filterProducts(){
        this.props.filterProducts();
    }
    render(){
        const showProduct = () =>{
            this.showProduct();
        }
        const products = this.props.products.map((product, index)=>{
          return (
            <React.Fragment key = {index}>
                <div className="container">
                    <div className="row">
                        <div className="col p-0">
                            <button className="btn-link border-0" onClick={(e)=>{ this.showProduct(e)}} value={index}>{product.name} - {product.price}</button>
                         </div>
                    </div>
                </div>
            </React.Fragment>);
        });

        return(
            <div className="col">
                <h1>Search</h1>
                    <div className="form-inline">
                        <input className="form-control"
                               value={this.props.value}
                               onChange={(e)=>{this.changeInput(e)}}>
                        </input>
                    </div>
                <div>
                    <button className="btn btn-primary mt-2 mb-2"
                            onClick={()=>{ this.filterProducts()}}>Sort by: price
                    </button>
                    {products}
                </div>
            </div>
            );
    }
}