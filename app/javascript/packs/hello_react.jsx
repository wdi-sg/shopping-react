// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Search from '../components/search'
import DisplayProducts from '../components/displayproducts'
import Cart from '../components/cart'
import axios from 'axios';
import styles from '../components/style.module.sass'

const Hello = props => {
  let [products, setProducts] = useState([]);
  let [allProducts, setAllProducts] = useState([])
  let [cartProducts, setCartProducts] = useState([])

  const url = '/products.json';

  useEffect(() => {
      axios.get(url)
      .then((response) => {
  
        const data = response.data
  
        setProducts(data);
        setAllProducts(data);

      }).catch((error)=>{
        console.log(error);
    })
  }, [])

  let changeProducts = (newArr) => {
    // console.log("hello!", newArr)
    setProducts(newArr)
  }

  let addToCart = (newItem) => {
    setCartProducts([...cartProducts, newItem])
  }

  console.log(styles)
  return <div className={styles.main}>
          <Search products = {products} 
                  changeProducts = {(filteredArray) => {changeProducts(filteredArray)}} 
                  allProducts = {allProducts}/>
          <DisplayProducts products = {products}
                          addToCart = {(newItem)=>{addToCart(newItem)}}/>
          <Cart cartproducts = {cartProducts}/>
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
