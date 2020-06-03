import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import axios from 'axios';

class Product extends React.Component {
  constructor(){
    super()
    this.state = {
      currentProduct:[]
    }
  }

  renderProduct(id){
    console.log("RENDERRED")
  const url = '/products/'+ id + '.json'

  axios.get(url)
    .then((response) => {
      console.log(response.data)
      const data = response.data
      this.setState({ products: response.data })
      console.log(this.state.currentProduct)
    }).catch((error)=>{
      console.log(error);
    })
  }

  render(){

    var button = (this.props.product ? <button onClick={(evt) => {
                                                          this.props.pushProduct()
                                                       }}>
                                                          Checkout
                                      </button>: null)
    
    return<div>
      <p>{this.props.product.name}</p>
      <p>{this.props.product.price}</p>
      <p>{this.props.product.description}</p>
      <p>{this.props.product.image_url}</p>
      {button}
    </div>
  }




}

export default Product;