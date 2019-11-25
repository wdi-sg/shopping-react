import React, { Component } from 'react'
import axios from 'axios';

export class Search extends Component {
    constructor(){
        super()
        this.state = {
            search: ''
        }
    }

    updateSearch(e) {
        this.setState({search: e.target.value})
    }
    render() {
        let searchFilter = this.props.products.filter(
            (product) => {
                return product.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        )

         let searchResult = searchFilter.map(item => {
             return <li>{item.name}</li>
         })   
        return (
            
            <div>
                <label >Search</label>
                <input type="text" value={this.state.search} onChange={(e)=> this.updateSearch(e)}/>
                <ul>
                    {searchResult}
                </ul>
            </div>
        )
    }
}

export default Search
