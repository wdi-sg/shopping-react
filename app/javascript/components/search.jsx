import React from 'react'
import axios from 'axios';

class Search extends React.Component {
    constructor() {
        super()
    }

    showOneProduct(e){
        this.props.showOneProduct(e.target.value)
    }

      render() {

        const showProduct = () =>{
            this.showProduct();
        }

        const products = this.props.products.map((product,index)=>{
            return (
                    <React.Fragment key = {index}>

                        <button className="btn btn-link"
                                onClick={ (e)=>{ this.showOneProduct(e) } }
                                value={index} >
                                {product.name} - ${product.price}
                        </button>

                    </React.Fragment>);
            });

    return (
      <div>
      <input className="form-control" type="text" placeholder="search products..." />
      {products}
      </div>
    );
  }
}

export default Search;