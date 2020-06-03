import React, {useState} from 'react'
import axios from 'axios';
import SearchForm from './SearchForm'
import Results from './Results'

function App(){

    const [results, setResults] = useState([])
    const [searchInput, setSearchInput] = useState(null)

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


    let searchInputTracker = (e) => {
        setSearchInput(e.target.value)
    }

    return(
        <div>
            <h2>HELL YEAH SHOPPING!!!!</h2>
            <SearchForm inputTracker={searchInputTracker} searchFunction={searchProducts}/>
            <Results items={results}/>
        </div>
    )
}

export default App