import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Search from '../components/search'
import Product from '../components/product.jsx'

export default class App extends Component {
    constructor() {
        super()

        this.state = {
            activeItem: 0
        }
    }

    setActiveItem(number) {
        this.setState({activeItem: number})
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
                        <Product productID={this.state.activeItem} />
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