import React from 'react';
import SearchInput from './SearchInput';
import ShowSearchResults from './ShowSearchResults';
import ShowProduct from '../product/ShowProduct';

class Search extends React.Component {

    constructor(){
        super();
        this.searchInputSetState = this.searchInputSetState.bind(this);
        this.selectSetState = this.selectSetState.bind(this);
        this.selectedPdtSetState = this.selectedPdtSetState.bind(this);
        this.onClick = this.onClick.bind(this);
        this.state = {
            searchInput: '',
            searchResults: [],
            selectClick: '',
            selectedPdt: [''],
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


    selectSetState(userSelect){
        this.setState( {selectClick: userSelect} );
    }

    selectedPdtSetState(pdtObj){
        let pdtData = [];
        pdtData.push(pdtObj);
        console.log(pdtData);
        this.setState( {selectedPdt: pdtData} );
    }

    render(){
        // let selectedPdt = this.state.selectedPdt;

        return(
                <div>

                    <SearchInput
                        searchInputSetState={this.searchInputSetState}
                    />

                    <button onClick={this.onClick}>Search</button>

                    <ShowSearchResults
                        searchResults={this.state.searchResults}
                        selectSetState={this.selectSetState}
                        selectedPdtSetState={this.selectedPdtSetState}
                    />
                    <ShowProduct
                        selectedPdt={this.state.selectedPdt}
                    />
                </div>

        )

    }



}

export default Search;


