// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Search from '../components/search';
import Product from '../components/products';

export default class Hello extends Component {
  render() {
    return (
      <div className="container">
          HELLO <br />
          <div className="row">
            <div className="col-sm-6">
              <Search />
            </div>
            <div className="col-sm-6">
              <Product />
            </div>
          </div>
      </div>
    )
  }
}


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
