import React from 'react';

import SearchForm from './searchForm';
import SearchResults from '../search/searchResults';

import styles from './style.scss';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            searchWord: "",
            allProducts: [],
            searchResults: [],
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getAllProducts = this.getAllProducts.bind(this);
        this.searchProducts = this.searchProducts.bind(this);
        this.searchResultsCallback = this.searchResultsCallback.bind(this);
        //this.reqListener = this.reqListener.bind(this);
    }

    handleChange(e) {
        this.setState({searchWord: e.target.value})
        console.log(e.target.value)
    }

    handleSubmit(e) {
        console.log(this.state.searchProduct);
        // makeAjaxCall();
        // console.log(this.state.items)
        e.preventDefault();
    }

    getAllProducts() {
        var req = new XMLHttpRequest();
        req.open("GET", "/products", false);
        req.send(null);

        const data = JSON.parse(req.responseText);

        this.setState({allProducts: data.products})
        console.log(this.state.allProducts)
        let allProducts = this.state.allProducts;

        // let allName = allProducts.map(obj => {
        //     console.log(obj.name)
        // }) // end of map
    }

    searchProducts() {
        // clear the list if its not empty
        var searchList = document.getElementById("searchList");
        if (searchList.innerText !== "") {
            $( "#searchList" ).empty();
        }

        var req = new XMLHttpRequest();
        req.open("GET", "/products", false);
       // req.addEventListener("load", getShowList);
        req.send();

        const data = JSON.parse(req.responseText);

        this.setState({allProducts: data.products})
        let allProducts = this.state.allProducts;
        let searchWord = this.state.searchWord;

        let searchResults = this.state.searchResults;

        let allName = allProducts.map(obj => {
            if (obj.name.toLowerCase().includes(searchWord)) {
                searchResults.push(obj);
            }
        }) // end of map
    }

    // take current product from search results (child) to the parent
    searchResultsCallback(dataFromSearchResults) {
        // this.setState({currentProduct: dataFromSearchResults})

        // let currentProduct = this.state.currentProduct;
        console.log("search: ", dataFromSearchResults)
        this.props.callbackFromApp(dataFromSearchResults)
    }

    render() {
        return (
            <React.Fragment>
                <SearchForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} searchWord={this.state.searchWord} searchProducts={this.searchProducts} />

                <SearchResults searchResults={this.state.searchResults} callbackFromSearch={this.searchResultsCallback} />
            </React.Fragment>
        )
    }
}

export default Search;