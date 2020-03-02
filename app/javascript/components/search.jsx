import React from 'react'

export default class Search extends React.Component{
    render(){
        return(
            <div>
            <h1>Search</h1>
            <div>
            <input></input><button>Search</button>
            </div>
            <div>
            <button>Sort by: price</button>
            </div>
            </div>
            );
    }
}