// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Search from './components/Search'
import Products from './components/Products'

class App extends React.Component{
  constructor(){
    super()

    this.state = {
        products: [],
        showProduct: []
    }

    this.searchProduct = (products) => {
        this.setState({
            products: products
        })
    }

    this.showProduct = (data) => {
        const reset = []

        this.setState({
            products: [...reset],
            showProduct: data
        })
    }
  }


  render(){
    console.log(this.state)
    return(
      <div className="container">
          <div className="row">
              <div>hello react</div>
              <div className="col-md-4">
                <Search searchProduct={this.searchProduct}/>
              </div>
              <div className="col-md-4">
                <Products products={this.state.products} showProduct={this.state.showProduct}/>
              </div>
          </div>
      </div>
    )
  }
}

App.defaultProps = {
  name: 'David'
}

App.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App name="React" />,
    document.body.appendChild(document.createElement('div')),
  )
})