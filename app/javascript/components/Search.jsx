import React from 'react';
import axios from 'axios';

class Search extends React.Component {
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
        const products = this.props.products.map((product, index)=> {
          return (
                <div key = {index}>
                    <div>
                        <div>
                            <button onClick={(e)=>{ this.showProduct(e)}} value={index}>{product.name} - {product.price}</button>
                         </div>
                    </div>
                </div>
        )});

        return(
            <div>
                <h1>Search</h1>
                    <div>
                        <input value={this.props.value}
                               onChange={(e)=>{this.changeInput(e)}}>
                        </input>
                    </div>
                <div>
                </div>
            </div>
            )
    }
}

export default Search;