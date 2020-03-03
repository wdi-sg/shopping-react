import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Search from '../components/search'

const Hello = props => (
  <div>
  Hello {props.name}!
  <Search/>
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