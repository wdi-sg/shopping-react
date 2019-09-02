import React from 'react';
import PropTypes from 'prop-types';

import SearchForm from './searchForm';
import SearchResults from '../search/searchResults';



class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            searchWord: "",
            searchResults: [],
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.searchProducts = this.searchProducts.bind(this);
    }

    handleChange(e) {
        this.setState({searchWord: e.target.value})
    }

    handleSubmit(e) {
        console.log(this.state.searchProduct);
        // makeAjaxCall();
        // console.log(this.state.items)
        e.preventDefault();
    }


    searchProducts() {
        // clear the list if its not empty
        var searchList = document.getElementById("searchList");
        if (searchList.innerText !== "") {
            searchList.innerText = ""
        }
        let searchWord = this.state.searchWord;

        let searchResults = this.state.searchResults;

        fetch(`/products`)
        .then(response => response.json())
        .then(response => {
            response.products.map(obj => {
                if (obj.name.toLowerCase().includes(searchWord)) {
                    searchResults.push(obj);
                }
            })
        })

        // var req = new XMLHttpRequest();
        // req.open("GET", "/products", false);
        // req.send();

        // console.log(req)

        // const data = JSON.parse(req.responseText);

        // get all products
        // let allProducts = data.products


        // let allName = allProducts.map(obj => {
        //     if (obj.name.toLowerCase().includes(searchWord)) {
        //         searchResults.push(obj);
        //     }
        // }) // end of map

        //push it to app to pass down to display product
        this.props.callbackFromApp(searchResults)
    }



    render() {
        return (
            <React.Fragment>
                <SearchForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} searchWord={this.state.searchWord} searchProducts={this.searchProducts} />

                <SearchResults searchResults={this.state.searchResults} callbackFromSearch={this.searchResultsCallback} handleClickFromApp={this.props.handleClickFromApp} />
            </React.Fragment>
        )
    }
}


Search.propTypes = {
    callbackFromApp: PropTypes.func
}

export default Search;