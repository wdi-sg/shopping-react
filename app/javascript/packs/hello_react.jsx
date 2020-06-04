// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import App from './components/app'


const Hello = props => (
    <div >
    <div class="row">
        <div class = "col pl-5 pb-3">
        <h1>Shopping React</h1>
        </div>
    </div>
    <div class="row">
        <div class = "col-4 pl-5 pb-1">
          <h5>Search</h5>
        </div>
        <div class = "col-4 pl-5 pb-1">
          <h5>Product</h5>
        </div>
        <div class = "col-4 pl-5 pb-1">
          <h5>Cart</h5>
        </div>
    </div>
    <App/>



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