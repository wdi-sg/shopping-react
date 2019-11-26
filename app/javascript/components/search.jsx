import React from 'react'
import axios from 'axios';
import Product from './product';

class Search extends React.Component{
    constructor(){
        super();
        this.state = {
            searchTerm: "",
            searchResult: [],
            selectedProduct: []
        };
    }

    getSearchTerm(event){
        console.log("Value: ", event.target.value);
        this.setState({searchTerm: event.target.value});
        console.log("State search term: ", this.state.searchTerm);
    }

    getProducts(){
        const searchTerm = this.state.searchTerm;
        // const onClick = this.props;

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

    getProductDetails(product){
        console.log("User clicked on this product: ", product);
        this.setState({selectedProduct: product});
    }

    render() {

        let productList = this.state.searchResult.map((product, index) => {
            return(
                <div key={index}>
                    <li>
                        <a href="/#prdt" onClick={() => this.getProductDetails(product)} value={product}>{product.id} - {product.name}</a>
                    </li>
                </div>
            );
        });

        return(
            <div>
                <div className="col">
                    Exact Search for Products:
                    <input onChange={(event) => this.getSearchTerm(event)}
                        value={this.state.searchTerm} />
                    <button onClick={() => this.getProducts()}>Search</button>
                    <ul>
                        <h3>Results: </h3>
                        {productList}
                    </ul>
                </div>

                <div className="col">
                    <div id="prdt">
                        <Product product={this.state.selectedProduct} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;