import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../components/app/app'


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <div>
      <App />
    </div>,
    document.body.appendChild(document.createElement('div')),
  )
})
