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
            products:[],
            input:'search',
            filtered:[]
        }

        this.getProducts = this.getProducts.bind(this)
        this.searchProduct = this.searchProduct.bind(this)
    }

  //   componentDidMount(){
  //   fetch('products.json')
  //   .then((response) => {const data = response.data

  //             this.setState({ products: data })
  //         })
  //   .catch((error) => {
  //     console.log(error)
  //   })
  // }


    getProducts(event){
        console.log(event)
          const url = '/products.json';

          axios.get(url)
            .then((response) => {

              const data = response.data

              this.setState({ products: data })

            }).catch((error)=>{
              console.log(error);
            })
        }

    searchProduct(event){
        let searchInput = event.target.value
        console.log(searchInput)
        this.setState({input:searchInput})

         const filteredProducts = this.state.products.filter((product)=>{return product.name.indexOf(this.state.input)!==-1})
        console.log(filteredProducts)


         axios.get('/products.json')
            .then((response) => {

              const data = response.data

              this.setState({filtered:filteredProducts})

            }).catch((error)=>{
              console.log(error);
            })

    }

    render(){


        const products = this.state.products.map((product, index)=>{
                  return (<div key = {index}>
                    <p>Name: {product.name}</p>
                      <img src = {product.image_url}/>
                      <p>Description:{product.description}</p>
                  </div>);
                });
        console.log(products)



        const filteredProducts= this.state.filtered.map((product,index)=>{
            return
            (<div key = {index}>
                    <p>Name: {product.name}</p>
                      <img src = {product.image_url}/>
                      <p>Description:{product.description}</p>
                  </div>);
        })
         console.log(this.state.filtered)
        console.log(filteredProducts)
        console.log(this.state.filtered.map((product)=>{product.name}))



        return(
        <div>
        <Search onClick={this.getProducts} onChange={this.searchProduct} />
        {filteredProducts}

        <Display/>
        <Cart/>
        </div>
        )
    }
}

export default App