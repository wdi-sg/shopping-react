import React from 'react';
import axios from 'axios';

export default class App extends React.Component{
    constructor(){
        super();
        this.state = {
            products: []
        }
    }

    getProducts(){
      const url = '/products.json';

      axios.get(url)
        .then((response) => {
          const data = response.data
          this.setState({ products: data })
        }).catch((error)=>{
          console.log(error);
        })
    }

    render(){
        let products;
        if (this.state.products != undefined) {
            products = this.state.products.map((product, index)=>{
                return (
                    <tr>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.description}</td>
                        <td><img src={product.image_url} /></td>
                    </tr>
                )
            });
        }

        return(<div>
            In App!
            <button onClick={()=>{ this.getProducts() }}>
                All products
            </button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {products}
                </tbody>
            </table>);
            </div>
        )
    }
}