import React from 'react'
import axios from 'axios';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            name:"",
            products: []
        }
    }

    getProducts(){
        const url = '/products.json';
        const whenDone = (response) => {
            const data = response.data
            this.setState({ products: data })
        }
        const whenError = (error)=>{
            console.log(error);
        };
        axios.get(url)
        .then(whenDone)
        .catch(whenError)
    }

    render() {
        const products = this.state.products.map((product,index)=>{
            return (<div key={index}>
                <p>Name: {product.name} Price: ${product.price}</p>
                <p>{product.image_url}</p>
                <p>Description: {product.description}</p>
            </div>);
        });
        return (<div>
            <button onClick={()=>{ this.getProducts() }}>
                Click to See Products
            </button>
            {products}
        </div>);
    }
}

export default App;