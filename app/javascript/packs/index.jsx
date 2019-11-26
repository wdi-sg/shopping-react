import React from 'react'
import ReactDOM from 'react-dom'
import Search from '../components/search';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Search />,
    document.body.appendChild(document.createElement('div')),
  )
})
