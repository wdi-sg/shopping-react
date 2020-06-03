import React from 'react';
import axios from 'axios';
import Searchform from './Searchform'

class Search extends React.Component{
    constructor(){
        super()

        this.state = {
            products: []
        }
    }

    getProducts(){
        const url = '/products/index.json';

        axios.get(url)
        .then((response) => {
            console.log(response)
            const data = response.data

            this.setState({ products: data })

        }).catch((error)=>{
            console.log("there is an error: " + error);
        })
    }

    render(){
        console.log(this.state)

        const posts = this.state.products.map((product, index)=>{
          return (
            <div>
                <p>{product.name}</p>
                <img src={product.image_url} />
            </div>
          );
        });

        return(
            <div>
                <Searchform />
                <button onClick={()=>{ this.getProducts() }}>
                  Click to See all Products
                </button>
                {posts}
            </div>
        )
    }
}

export default Search