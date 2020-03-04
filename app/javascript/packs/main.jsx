// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Search from '../components/search'
import Product from '../components/product'
import Cart from '../components/cart'



import axios from 'axios';

class App extends React.Component { 
  constructor(){
    super()
    this.state = {
      input: "",
      currentProduct: {},
      cart:[]
    }
  }

  findProduct(id){
  const url =  '/products/' + id + '.json'

  axios.get(url)
    .then((response) => {
      console.log("findProduct")
      console.log(response.data)
      const data = response.data
      this.setState({ currentProduct: response.data })
      console.log(this.state.currentProduct)
    }).catch((error)=>{
      console.log(error);
    })
  }

  addProduct(product){
    console.log("test!!!!!!!!!!!!!")
    this.state.cart.push(product)
    this.setState({cart: this.state.cart})
    
  }

  removeItem(index){
    console.log("Deleting item!!!!!!" + "index is "+ index)
    this.state.cart.splice(index,1)
    this.setState({cart: this.state.cart})
    console.log("After deleting, your current items are: ")
    console.log(this.state.cart)
    

  }

  render(){
    console.log("Rendering MAIN!")
    return <div class="d-flex justify-content-around">
      <div className="w-25 mx-6 border border-primary">
        <Search chooseProduct={(index) => this.findProduct(index)} />
      </div>
      <div className="w-25 border border-primary">
        <Product pushProduct={() => {this.addProduct(this.state.currentProduct)}} product={this.state.currentProduct}/>
      </div>  
      <div className="w-25">
        <Cart items={this.state.cart} deleteItem={(index) => this.removeItem(index)}/>
      </div>
      
    </div>
  }
}



document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.querySelector('#root')),
  )
})
