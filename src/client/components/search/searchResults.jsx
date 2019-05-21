import React from 'react';

//import DisplayProduct from './displayProduct';

class SearchResults extends React.Component {
    constructor() {
        super();
        this.state = {
            currentProduct: {}
        }

        this.handleIndvClick = this.handleIndvClick.bind(this);
        //this.getCurrentProduct = this.getCurrentProduct.bind(this);
    }

    handleIndvClick(e) {
        //console.log(e.target.innerHTML);
        // find current product and set state
        let searchResults = this.props.searchResults;

        let currentObj = searchResults.find(x => x.name === e.target.innerHTML)
        this.setState({currentProduct: currentObj})

        let currentProduct = this.state.currentProduct;
        this.props.callbackFromSearch(currentProduct)
        console.log("searchResults:", currentProduct)
    }

    render() {
        let searchResults = this.props.searchResults;

        // do a map to print the list
        let allProducts = searchResults.map(obj => {
            return <li onClick={this.handleIndvClick}>
                    {obj.name}
                </li>
        }) // end of map

        return (
            <React.Fragment>
                <div className="searchList-container">
                    <ul id="searchList">
                        {allProducts}
                    </ul>
                </div>


            </React.Fragment>
        )
    }
}

export default SearchResults;