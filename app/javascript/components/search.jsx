import React from 'react';

class Search extends React.Component{

    handleClick(event){
        this.props.onClick(event)
    }

    render(){
        return (
        <div>
        <p>Search</p>
         <button onClick={(event)=>{ this.handleClick(event) }}>
          Click to See Products
        </button>
        </div>
    )
    }
}

export default Search