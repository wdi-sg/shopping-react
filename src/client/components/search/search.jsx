import React from 'react';

import SearchForm from './searchForm';
import DisplaySearchProducts from '../product/displaySearchProducts';

import styles from './style.scss';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            searchWord: "",
            allProducts: [],
            searchResults: [],
            currentProduct: null,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getAllProducts = this.getAllProducts.bind(this);
        this.searchProducts = this.searchProducts.bind(this);
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
        console.log(allProducts)

        let allName = allProducts.map(obj => {
            console.log(obj.name)
        }) // end of map
    }

    searchProducts() {
        // clear the list if its not empty
        var searchList = document.getElementById("searchList");
        if (searchList.innerText !== "") {
            $( "#searchList" ).empty();
        }

        var req = new XMLHttpRequest();
        req.open("GET", "/products", false);
        req.send(null);

        const data = JSON.parse(req.responseText);

        this.setState({allProducts: data.products})
        let allProducts = this.state.allProducts;
        let searchWord = this.state.searchWord;

        let searchResults = this.state.searchResults;

        let reactThis = this;
        let allName = allProducts.map(obj => {
            if (obj.name.toLowerCase().includes(searchWord)) {
                searchResults.push(obj);
                // var li = document.createElement("li");
                // var liText = document.createTextNode(obj.name);

                // // when user click product name, put obj into currentProduct state
                // li.onclick = function() {
                //     reactThis.setState({currentProduct: obj})
                // };

                // // var a = document.createElement("a");
                // // a.href = `/products/${obj.id}`;
                // // a.text = obj.name;
                // // a.id = obj.id;

                // //li.appendChild(a);
                // li.appendChild(liText);
                // ul.appendChild(li);
            }
        }) // end of map
        //div.appendChild(ul)
        //body.appendChild(div);
    }

    render() {
        return (
            <div>
                <SearchForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} searchWord={this.state.searchWord} searchProducts={this.searchProducts} />

                <DisplaySearchProducts searchResults={this.state.searchResults} />

            </div>


        )
    }
}

export default Search;