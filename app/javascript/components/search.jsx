import React from 'react';

class Search extends React.Component{

    handleClick(event){
        this.props.onClick(event)
    }

    changeHandler(event){
        this.props.onChange(event)
    }

    render(){
        return (
        <div>
         <button onClick={(event)=>{ this.handleClick(event) }}>
          Click to See All Products
        </button>
        <p>Search</p>

          <div>
            <input onChange={(event)=>{this.changeHandler(event)}} name="query" type="text" value = {event.target.value} placeholder="Search products..."/>
            <button onClick={(event)=>{ this.handleClick(event) }}type="submit">Search</button>
          </div>

        </div>
    )
    }
}

export default Search