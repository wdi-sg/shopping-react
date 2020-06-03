import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Search from '../components/search'
import Product from '../components/product'
import axios from 'axios'
import Cart from '../components/cart'

export default class App extends Component {
    constructor() {
        super()

        this.state = {
            activeProduct: {},
            shoppingCart: []
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
        let cartArray = this.state.shoppingCart
        cartArray.push(product)
        this.setState({shoppingCart: cartArray})
    }

    removeProductFromCart(arrayIndex) {
        let cartArray = this.state.shoppingCart
        cartArray.splice(arrayIndex, 1)
        this.setState({shoppingCart: cartArray})
    }

    render() {
        return (
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
                >
                    <Grid item xs={4} m={1}>
                        <Search setActiveItem={(num)=>{this.setActiveItem(num)}}/>
                    </Grid>
                    <Grid item xs={4} m={1}>
                        <Product activeProduct={this.state.activeProduct}
                        addProductToCart={(product)=>{this.addProductToCart(product)}} 
                        />
                    </Grid>
                    <Grid item xs={4} m={1}>
                        <Cart shoppingCart={this.state.shoppingCart}
                        removeProductFromCart={(index)=>{this.removeProductFromCart(index)}}/>
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