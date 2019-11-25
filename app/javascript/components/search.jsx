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

    getSearchTerm(event){
        console.log("Value: ", event.target.value);
        this.setState({searchTerm: event.target.value});
        console.log("State search term: ", this.state.searchTerm);
    }

    getProducts(){
        const searchTerm = this.state.searchTerm;
        const onClick = this.props;

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
                    <li>
                        <a href={"/products/" + product.id}>{product.name}</a>
                    </li>
                </div>
            );
        });

        return(
            <div>
                Exact Search for Products:
                <input onChange={(event) => { this.getSearchTerm(event)}}
                    value={this.state.searchTerm} />
                <button onClick={() => this.getProducts()}>Search</button>
                <ul>
                    <h3>Results >>></h3>
                    {productList}
                </ul>
            </div>
        );
    }
}

export default Search;