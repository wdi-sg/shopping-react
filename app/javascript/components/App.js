import React, {useState} from 'react'
import axios from 'axios';
import SearchForm from './SearchForm'
import Results from './Results'
import ProductListing from './ProductListing'
import Cart from './Cart'
function App(){

    const [results, setResults] = useState([])
    const [searchInput, setSearchInput] = useState(null)

    const [selectedProduct, setSelectedProduct] = useState(null)
    const [cart, updateCart] = useState({
        items: [],
        subtotal: function(){
            return this.items.reduce((accumulator, currentVal)=>{
                accumulator.price + currentVal.price
            })
        },
        shipping: 7,
        gst: function(){
            return this.subtotal*0.17
        },
        total: function(){
            return this.subtotal+this.shipping+this.gst
        }
    })

    let searchProducts = ()=>{

        //If search input is empty, get all products
        if (!searchInput){

            return axios.get(`/products.json`)
              .then((response) => {
          
                const data = response.data
                setResults(data)
          
              }).catch((error)=>{
                console.log(error);
              })
          }

      //If not, get the value for searchInput and make a request to the search API.
        axios.get(`/products/search/${searchInput}`)
          .then((response) => {

            const data = response.data
            setResults(data)
      
          }).catch((error)=>{
            console.log(error);
          })
      }

    let productResultClick = (e) => {
        axios.get(`/products/${e.target.id}`)
        .then((response) => {
          const data = response.data
          setSelectedProduct(data)
        }).catch((error)=>{
          console.log(error);
        })
        console.log(`the product id is ${e.target.id}`)
    }

    let searchInputTracker = (e) => {
        setSearchInput(e.target.value)
    }

    let addToCartBtn = ()=> {
        console.log(selectedProduct);
        console.log(`clicked add to cart`)

        updateCart(cart => {
            cart.items.push(selectedProduct);
            console.log(cart)
            return cart;           
        })
    }

    return(
        <div>
            <div className="container-fluid">
            <h2>HELL YEAH SHOPPING!!!!</h2>

            <div className="row">

                <div className="col">

                <SearchForm inputTracker={searchInputTracker} searchFunction={searchProducts}/>

                 <Results productResultClick={productResultClick} products={results}/>


                </div>

                <div className="col">

                {selectedProduct ? <ProductListing addToCart={addToCartBtn} product={selectedProduct}/> : 'No item selected'}

                </div>

                <div className="col">

                <Cart cart={cart} productResultClick={productResultClick}/>
                </div>



            </div>


            </div>

        </div>
    )
}

export default App