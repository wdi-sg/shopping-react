// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Searchcomponent from '../components/searchcomponent'
import Productcomponent from '../components/productcomponent'

const Product = props => (
  <div>
    <Productcomponent url={props.url}/>
  </div>
)

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('product_data')
  const data = JSON.parse(node.getAttribute('data'))
  ReactDOM.render(
    <Product url={data.url}/>,
    document.body.appendChild(document.createElement('div')),
  )
})