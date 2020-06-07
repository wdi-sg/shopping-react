import React from 'react';
import axios from 'axios';
import Search from './search/search';
import Products from './products/products';

export default class App extends React.Component{
    constructor(){
        super();
        this.state = {
            products: [],
            searchTerm: ''
        }
    }

    setSearch(input){
        this.setState({
            searchTerm: input
        })
    }

    getProducts(){
      const url = '/products.json';
      axios.get(url)
        .then((response) => {
            const data = response.data
            this.setState({ products: data })
        }).catch((error)=>{
          console.log(error);
        })
    }

    sortName(){
        const url = '/products.json'
        axios.get(url)
            .then((response)=> {
                const data = response.data.sort((a, b) => (a.name > b.name) ? 1 : -1)
                this.setState({products: data})
            }).catch((error)=>{
                console.log(error);
            })
    }

    sortPrice(){
        const url = '/products.json'
        axios.get(url)
            .then((response)=> {
                const data = response.data.sort((a, b) => (a.price > b.price) ? 1 : -1)
                this.setState({products: data})
            }).catch((error)=>{
                console.log(error);
            })
    }

    render(){
        return(
            <div className='container'>
                <div className='row'>
                    <Search 
                        setSearch={(event)=>{this.setSearch(event)}}
                        getProducts={()=>{this.getProducts()}}
                        sortName={()=>{this.sortName()}}
                        sortPrice={()=>{this.sortPrice()}}/>

                    <Products 
                        products={this.state.products} 
                        searchTerm={this.state.searchTerm}/>
                    <div className='col-4'>
                        <h2>Cart</h2>
                    </div>
                </div>
            </div>
        );
    }
}