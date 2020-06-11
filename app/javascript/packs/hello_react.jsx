// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Product from './components/product'
import Form from './components/form'
import App from './components/app'

let testValue = ""
let datafile = []


const Hello = props => (
    <div >
    <div className="row">
        <div className = "col-12 text-center">
        <h1>Shopping Cart</h1>
        </div>
    </div>
    <App        />



  </div>
)

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="React" />,
    document.body.appendChild(document.createElement('div')),
  )
})