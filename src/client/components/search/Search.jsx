import React from 'react';
import SearchInput from './SearchInput';
import ShowSearchResults from './ShowSearchResults';

class Search extends React.Component {

    constructor(){
        super();
        this.searchInputSetState = this.searchInputSetState.bind(this);
        this.onClick = this.onClick.bind(this);
        this.state = {
            searchInput: 'test',
            searchResults: [],
        }
    }

    searchInputSetState(userInput) {
        this.setState( {searchInput: userInput} );
        // console.log('searchInput',this.state.searchInput);
    }

    onClick() {
        const this2 = this;
        let searchInput = this.state.searchInput;
        console.log('searchInput',searchInput);
        var jasonParseResult = function() {
            let data = JSON.parse( this.responseText).items;
            this2.setState( {searchResults: data})
            console.log('searchResults',searchResults);
        }
        const newXMLReq = new XMLHttpRequest();
        const reqURL = "http://localhost:3000/api/query?search=" + searchInput;
        console.log("reqURL", reqURL);
        newXMLReq.addEventListener("load", jasonParseResult);
        newXMLReq.open("GET", reqURL);
        newXMLReq.send();
    }


    render(){
        return(
            <div>

                <SearchInput
                    searchInputSetState={this.searchInputSetState}
                />

                <button onClick={this.onClick}>Search</button>

                <ShowSearchResults
                    searchResults={this.state.searchResults}
                />

            </div>
        )

    }



}

export default Search;


