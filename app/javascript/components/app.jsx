import React from 'react';
import axios from 'axios';

export default class App extends React.Component{
    constructor(){
        super();
        this.state = {
            products: []
        }
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
        let products;
        if (this.state.products != undefined) {
            products = this.state.products.map((product, index)=>{
                return (
                    <div className="card mb-3" key={product.id}>
                        <img className="card-img-top" src={product.image_url} alt={product.name} />
                        <div className="card-body">
                            <div className='title'>
                                <h5 className="card-title">{product.name}</h5>
                                <button className='cart-icon'>
                                    <i className='fa fa-shopping-cart'></i>&nbsp;&nbsp;
                                    <p>Add to Cart</p>
                                </button>
                            </div>
                            <h6 className="card-text">${product.price}</h6>
                            <p className="card-text">{product.description}</p>
                        </div>
                    </div>
                )
            });
        }

        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-3'>
                        <div>
                            <h2>Search</h2>
                            <br/>
                            <input
                                type='text'
                                placeholder='Type product name here..' />
                            <br/>
                            <br/>
                            <button
                                className="sort"
                                onClick={(event)=>{ this.getProducts(event) }}>
                                All Products
                            </button>
                            <button
                                className="sort"
                                onClick={()=>{ this.sortName() }}>
                                Sort by: Name
                            </button>
                            <button
                                className="sort"
                                onClick={()=>{ this.sortPrice() }}>
                                Sort by: Price
                            </button>
                        </div>
                    </div>
                    <div className='col-5'>
                        <h2>Products</h2>
                        {products}
                    </div>
                    <div className='col-4'>
                        <h2>Cart</h2>
                    </div>
                </div>
            </div>
        );
    }
}