// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import axios from 'axios';
import Select from 'react-select'


class Search extends React.Component {

    constructor(){
        super()
        this.state = {
            option: null
        }
    }

    selectChange = option => {
        this.setState( { option } )
    }

    selectSort(option){
        const url = '/products.json';
        axios.get(url)
                .then( (response) => {
                    const data = response.data
                    this.props.productsCallback(data)
                }).catch( ( error ) => {
                    console.log( error );
                } )
    }

    render(){

        const options = [
            { value: 'id', label: 'ID' },
            { value: 'name', label: 'Name' },
            { value: 'price', label: 'Price' }
        ]

        const products = this.props.products.map( product => {
            return <Item product={product} callback={this.props.callback} />
         })

        return(
            <div>
                <label>Sort by :</label>
                <Select options={ options } onChange={ this.selectChange } value={ this.state.option } />
                <button onClick={ ()=>{ this.selectSort(this.state.option) } } >Sort</button>
                {products}
            </div>
        );
    }
}

class Product extends React.Component {

    constructor(){
        super()
        this.state = {

        }
    }


    render(){

        console.log("Rendering Product", this.props.product)

        return(

            <div>
                <img src={this.props.product.image_url} />
                <p>Description: {this.props.product.description} </p>
                <p>Price : {this.props.product.price} </p>
                <button onClick={()=>{ this.props.cartCallback(this.props.product) }} >Add to Cart</button>
            </div>
        );
    }
}

class Cart extends React.Component {

    render(){

        let totalPrice = 0
        const itemsInCart = this.props.cart.map(product =>{
            totalPrice = totalPrice + product.price
            return <Item product={product} callback={product} />
        })

        return(
            <div>
                {itemsInCart}
                <p>Price : ${totalPrice}</p>
            </div>
        );
    }
}

class Item extends React.Component {

    render(){

        return(

            <div>
                <label>ID : { this.props.product.id }</label>
                <label>Name : { this.props.product.name }</label>
                <label>Price : { this.props.product.price }</label>
                <button onClick={() => { this.props.callback( this.props.product.id ) } }>Inspect</button>
            </div>
        );
    }
}

class App extends React.Component {

    constructor(){
        super()
        this.state = {
            products: [],
            product: {},
            cart: []
        }
    }

    getProducts(products){
        this.setState( { products } )
    }

    inspect(product){
        this.setState( { product } )
    }

    addCart(product){
        this.setState( { cart: [ product, ...this.state.cart ] } )
    }

    render(){

        const inspectCallback = (index) => {
                let id = parseInt(index)
                this.inspect(this.state.products[id])
            }

        const productsCallback = (products) => {
            this.getProducts(products)
        }

        const cartCallback = (product) => {
            this.addCart(product)
        }

        return(
            <div>
                <Search callback={ inspectCallback } productsCallback={ productsCallback } products={ this.state.products } />
                <Product product={ this.state.product } cartCallback={ cartCallback } />
                <Cart cart={ this.state.cart } />
            </div>
        );
    }
}


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})
