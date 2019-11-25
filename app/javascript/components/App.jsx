import React from 'react';
import axios from 'axios';
import styles from './style.scss';
import Search from './Search/Search'

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            query:"",
            products: []
        }
    }

    searchProducts(){
        const url = '/products.json';
        const whenDone = (response) => {
            let {query} = this.state
            this.setState({ products: response.data.filter(x=>x.name.includes(query))})
        }
        const whenError = (error)=>{
            console.log(error);
        };
        axios.get(url)
        .then(whenDone)
        .catch(whenError)
    }

    onSearchQuery(event){
        let query = event.target.value;
        this.setState({query})
    }

    render() {
        const products = this.state.products.map((product,index)=>{
            return (<div key={index}>
                <p>Name: {product.name} Price: ${product.price}</p>
                <p>{product.image_url}</p>
                <p>Description: {product.description}</p>
            </div>);
        });

        return (<div>
            <Search
                searchProducts={()=>{this.searchProducts()}}
                onSearchQuery={(event)=>{this.onSearchQuery(event)}}
                className="col"
            />
            {products}
        </div>);
    }
}

export default App;