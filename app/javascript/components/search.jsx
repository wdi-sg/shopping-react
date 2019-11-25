import React from 'react'
import axios from 'axios';

class Search extends React.Component{
    constructor(){
        super();
        this.state = {
            searchTerm: "",
            searchResult: []
        };
    }

    getProducts(event){
        console.log("Value: ", event.target.value);
        this.setState({searchTerm: event.target.value});
        console.log("State search term: ", this.state.searchTerm);

        const url = '/products.json?q=' + this.state.searchTerm;

        axios.get(url)
            .then((response) => {
                const data = response.data;
                this.setState({searchResult: data});
                console.log(data);
            }).catch((error) => {
                console.log(error);
            });
    }

    render() {

        let productList = this.state.searchResult.map((product, index) => {
            return(
                <div key={index}>
                    <li>{product.name}</li>
                </div>
            );
        });

        return(
            <div>
                Search for Products:
                <input onChange={(event) => { this.getProducts(event)}}
                    value={this.state.searchTerm} />
                {productList}
            </div>
        );
    }
}

export default Search;