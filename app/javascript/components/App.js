import React, {useState, useEffect} from 'react'
import axios from 'axios';
import SearchForm from './SearchForm'
import Results from './Results'
import ProductListing from './ProductListing'
import Cart from './Cart'
function App(){

    const [results, setResults] = useState([])
    const [searchInput, setSearchInput] = useState(null)

    const [selectedProduct, setSelectedProduct] = useState(null)
    const [cost, setCost] = useState({
      subtotal: 0,
      shipping: "7.00",
      gst: 0,
      total: 0
    })
    const [cart, updateCart] = useState({
        items: [],
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
    }

    let searchInputTracker = (e) => {
        setSearchInput(e.target.value)
    }

    let deleteButtonClick = (e) => {
      
    }

    let addToCartBtn = ()=> {
        updateCart(currentCart => {
          return {...currentCart, items: [...currentCart.items, selectedProduct]}
        })
      }

      //What happens after cart is updated.
      useEffect(()=>{

        //Only modify if there are 
          if (cart.items.length===0) {
            return setCost({
              subtotal: 0,
              gst: 0,
              shipping: "7.00",
              total: 0
            })
          }
          let thisSubtotal = cart.items.reduce((acc, el) => acc + parseFloat(el.price), 0);
          let thisGst = thisSubtotal * 0.17;
          let thisTotal = (thisSubtotal + thisGst + parseFloat(cost.shipping)).toFixed(2);
          setCost(currentCost => {
            return {
              ...currentCost,
              subtotal: thisSubtotal.toFixed(2),
              gst: thisGst.toFixed(2),
              total: thisTotal,
            };
          })
      }, [cart]);


      //What happens after cost gets updated.
      useEffect(()=> {
        console.log(`cost useeffect triggered`);
        console.log(cost)
      }, [cost])

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

                <Cart cart={cart} cost={cost} productResultClick={productResultClick}/>
                </div>



            </div>


            </div>

        </div>
    )
}

export default App