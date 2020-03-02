import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Search from '../components/search'
import Product from '../components/product.jsx'
import axios from 'axios'

export default class App extends Component {
    constructor() {
        super()

        this.state = {
            activeProduct: {}
        }
    }

    setActiveItem(number){
        const url = `/products/${number}.json`      
        axios.get(url)
          .then((response) => {
            const data = response.data
            this.setState({ activeProduct: data })
          }).catch((error)=>{
            console.log(error);
          })
      }

    addProductToCart(product) {
        console.log(product.name)
        console.log('adding to cart.')
    }


    render() {
        return (
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
                >
                    <Grid item xs={4}>
                        <Search setActiveItem={(num)=>{this.setActiveItem(num)}}/>
                    </Grid>
                    <Grid item xs={4}>
                        <Product activeProduct={this.state.activeProduct} 
                        addProductToCart={(product)=>{this.addProductToCart(product)}/>
                    </Grid>
                    <Grid item xs={4}>
                        
                    </Grid>
            </Grid>
        )
    }
}


document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <App/>,
      document.body.appendChild(document.createElement('div')),
    )
  })