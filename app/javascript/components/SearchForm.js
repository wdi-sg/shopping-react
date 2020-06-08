import React from 'react'

function SearchForm(props){


    return(
        <div>
            <input onChange={props.inputTracker}></input>
            <button onClick={props.searchFunction}>Search</button>
        </div>
    )
}

export default SearchForm