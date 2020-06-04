import React, {useState} from 'react'
import axios from 'axios';
import SearchForm from './SearchForm'
import Results from './Results'
import ProductListing from './ProductListing'

function App(){

    const [results, setResults] = useState([])
    const [searchInput, setSearchInput] = useState(null)

    const [selectedProduct, setSelectedProduct] = useState(null)

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

                {selectedProduct ? <ProductListing product={selectedProduct}/> : 'No item selected'}

                </div>

                <div className="col">

                <SearchForm inputTracker={searchInputTracker} searchFunction={searchProducts}/>

                </div>



            </div>


            </div>

        </div>
    )
}

export default App