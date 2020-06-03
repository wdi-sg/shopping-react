// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Search from '../components/search'
import axios from 'axios';

const Hello = props => {
  let [allProducts, setAllProducts] = useState([]);

  const url = '/products.json';

  useEffect(() => {
      axios.get(url)
      .then((response) => {
  
        const data = response.data
  
        setAllProducts(data);

      }).catch((error)=>{
        console.log(error);
    })
  }, [])

  return <div>
          Top Level Component
          <Search products = {allProducts} />
        </div>
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
