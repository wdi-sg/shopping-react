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
            filtered:[],
            showProduct: [],
            cart:[]
        }
        this.getProducts = this.getProducts.bind(this)
        this.searchProduct = this.searchProduct.bind(this)
        this.showProduct = this.showProduct.bind(this)
        this.addtoCart = this.addtoCart.bind(this)
    }

    componentDidMount(){

        this.getProducts()
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

      showProduct(event,eventId){

         let oneProduct = this.state.products.filter((product)=>{if (product.id === eventId) return product })


            this.setState({ showProduct: oneProduct })
        }

    searchProduct(event){
        let searchInput = event.target.value
          this.setState({input:searchInput})

         const filteredProducts = this.state.products.filter((product)=>{return product.name.indexOf(this.state.input)!==-1})

        this.setState({filtered:filteredProducts})
    }

    addtoCart(event){
        console.log(event.target.value)
        let cartNumber = parseInt(event.target.value)
        let cartItem = this.state.products.filter((product)=>{

            if (product.id === cartNumber) return product
        })
        console.log('look item')
          console.log(cartItem)
        let newCart = this.state.cart.splice()

        newCart.push(cartItem)
        console.log(newCart)

        this.setState({cart:newCart})
        console.log('AAAAA CART')
        console.log(this.state.cart)

    }

    render(){


        const filteredResult = this.state.filtered.map((product,index)=>{
            return (<div key = {index}>
                    <p><a onClick = {(e)=>{this.showProduct(e,product.id)}} href="#" value = {product.id}>{product.name}</a></p>
                  </div>);
        })

        return (
        <div className = "container">
            <div className = "row">
            <div className = "col-4">
                <Search onChange={this.searchProduct} />
                {filteredResult}
            </div>

            <div className = "col-4">
                 <Display item = {this.state.showProduct} cart = {this.addtoCart}/>
            </div>
             <div className = "col-4">
                <Cart stuff = {this.state.cart}/>
            </div>
            </div>
        </div>
        )
    }
}

export default App