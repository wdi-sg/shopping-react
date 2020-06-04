import React from 'react';
import axios from 'axios';

class Products extends React.Component{

    getProduct(index){
        const productID = parseInt(index)+1
        const url = '/products/show.json';
        const payload = {params:{
            id: productID
        }}

        axios.get(url, payload)
        .then((response) => {
            console.log(response)
            const data = response.data
            console.log(data)

        }).catch((error)=>{
            console.log("there is an error: " + error);
        })
    }

    render(){
        const products = this.props.products.map((product, index)=>{
          return (
            <div>
                <p>{product.name}</p>
                <img src={product.image_url} />
                <button onClick={() => {this.getProduct(index)}}>
                    See Product
                </button>
            </div>
          );
        });

        return(
            <div>
                {products}
            </div>
        )
    }
}

export default Products