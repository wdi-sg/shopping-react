import React from 'react';
import axios from 'axios';
import Searchform from './Searchform'

class Search extends React.Component{

    getProducts(){
        const url = '/products/index.json';

        axios.get(url)
        .then((response) => {
            console.log(response)
            const data = response.data

            this.props.searchProduct(data)

        }).catch((error)=>{
            console.log("there is an error: " + error);
        })
    }

    getSearchInput(){

    }

    render(){

        return(
            <div>
                <Searchform searchProduct={this.props.searchProduct}/>
                <button onClick={()=>{ this.getProducts() }}>
                  Click to See all Products
                </button>
            </div>
        )
    }
}

export default Search