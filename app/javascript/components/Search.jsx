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
                return product.name.toLowerCase().includes(this.state.search.toLowerCase());
            }
        )

         let searchResult = searchFilter.map(item => {
             if(this.state.search !== '') {
                return <li className="list-group-item" onClick={(e)=>{this.props.selectProduct(e)}} >{item.name}</li>

             }
         })   
        return (
            
            <div>
                <label >Search</label>
                <input type="text" value={this.state.search} onChange={(e)=> this.updateSearch(e)}/>
                <ul className="list-group">
                    {searchResult}
                </ul>
            </div>
        )
    }
}

export default Search
