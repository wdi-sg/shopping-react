import React from 'react';

import Search from '../search/search';

class DisplaySearchProducts extends React.Component {
    constructor() {
        super();
        this.state = {
            currentProduct: {}
        }

        this.setCurrentProduct = this.setCurrentProduct.bind(this);
    }

    setCurrentProduct(e) {
        //this.setState({currentProduct: obj});
        console.log(this.state.currentProduct);
    }



    render() {
        let searchResults = this.props.searchResults;

        // do a map to print the list
        let allProducts = searchResults.map(obj => {
            return <li>
                    {obj.name}
                </li>
        }) // end of map

        return (
            <div className="searchList-container">
                <ul id="searchList">
                    {allProducts}
                </ul>
            </div>
        )
    }
}

export default DisplaySearchProducts;