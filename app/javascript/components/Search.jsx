import React from 'react'
import axios from 'axios'

class Search extends React.Component {
    constructor(){
    super()
    console.log("rendering search");
        this.state = {
        }
    }
    render(){
        console.log('state results:', this.props.results)

      const displayRes = this.props.results.map((res, index)=>{
          return (<li key = {index} onClick = {()=> {this.props.getProd(res,index) }} >
            {res}
          </li>);
        });

        return(
            <div className="container">
              <div className="row">
                <h1>Search Product:</h1>
                  <input type="text" onChange={(input)=> {this.props.setSearchTerm(input)}} value = {this.props.term} />
                  <h2>Search Result(s):</h2>
                  <ul>{displayRes}</ul>
              </div>
            </div>
        );
    }
}

export default Search;
