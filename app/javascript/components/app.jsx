import React from 'react';
import ReactDOM from 'react-dom';
import Cart from './cart';
import Display from './display';
import Search from './search';
import axios from 'axios';

class App extends React.Component{

    constructor(){
        super()
        this.state = {
            products:[]
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

        const products = this.state.products.map((product, index)=>{
                  return (<div key = {index}>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                     <img src = {product.image_url}/>
                      <p>{product.description}</p>
                  </div>);
                });
        return(
              <div>
        <Search/>
        <button onClick={()=>{ this.getProducts() }}>
          Click to See Products
        </button>
        {products}
        <Display/>
        <Cart/>
        </div>
        )
    }
}

export default App