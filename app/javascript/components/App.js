import React, {useState} from 'react'
import axios from 'axios';
import SearchForm from './SearchForm'
import Results from './Results'

function App(){

    const [products, setProducts] = useState([])
    const [results, setResults] = useState([])
    const [searchInput, setSearchInput] = useState(null)

    let searchProducts = ()=>{

        const url = '/products.json';
      
        axios.get(url)
          .then((response) => {
      
            const data = response.data
            console.log(data)
            setResults(data)
      
          }).catch((error)=>{
            console.log(error);
          })
      }


    let searchInputTracker = (e) => {
        setSearchInput(e.target.value)
    }

    // let resultElements = results.map(result => {
    //     return (
    //         <div>
    //             <p>{result.name}</p>
    //             <p>{result.price}</p>
    //             <p>{result.description}</p>
    //         </div>

    //     )
    // })

    return(
        <div>
            <h2>HELL YEAH SHOPPING!!!!</h2>
            <SearchForm inputTracker={searchInputTracker} searchFunction={searchProducts}/>
            <Results items={results}/>
        </div>
    )
}

export default App