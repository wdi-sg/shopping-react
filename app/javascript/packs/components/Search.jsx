import React from 'react';
import axios from 'axios';

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
          return (<div>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
          </div>);
        });

        return(
            <div>
                <button onClick={()=>{ this.getProducts() }}>
                  Click to See Posts
                </button>
                {posts}
                <p>oi oi</p>
            </div>
        )
    }
}

export default Search