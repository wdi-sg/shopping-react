import React from 'react';
import axios from 'axios';

import SearchResult from './SearchResult';

export default class Search extends React.Component {
    getResults(){
        axios.get('/products.json')
        .then(response => {
            const data = response.data
            this.props.setResults(data)
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        const results = this.props.searchResults.slice(0,10).map(result => {
            return <SearchResult result={result} />
        })

        return (
            <div>
                <h3>Search Term</h3>
                <input />
                <p><button onClick={()=>{this.getResults()}}>Search</button></p>
                <table>
                <thead>
                    <tr>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Description</th>
                    </tr>
                </thead>

                <tbody>
                    {results}
                </tbody>
                </table>
            </div>
        );
    }
}