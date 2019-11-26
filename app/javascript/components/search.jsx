import React from 'react';

class Search extends React.Component{

    changeHandler(event){
        this.props.onChange(event)
    }

    render(){
        return (
        <div>

        <h1>Search</h1>

          <div>
            <input onChange={(event)=>{this.changeHandler(event)}} name="query" type="text" value = {event.target.value} placeholder="Search products..."/>
          </div>

        </div>
    )
    }
}

export default Search