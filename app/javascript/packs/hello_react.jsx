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
            products: [],
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
                    console.log(data)
                    this.setState( { products: data } )
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

        const products = this.state.products.map( product => {
            return <Result product={product} />
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

        return(

            <div>

            </div>
        );
    }
}

class Cart extends React.Component {

    constructor(){
        super()
        this.state = {

        }
    }


    render(){

        return(

            <div>

            </div>
        );
    }
}

class Result extends React.Component {

    render(){

        return(

            <div>
                <label>ID : { this.props.product.id }</label>
                <label>Name : { this.props.product.name }</label>
                <label>Price : { this.props.product.price }</label>
                <button>Inspect</button>
            </div>
        );
    }
}

class App extends React.Component {

    constructor(){
        super()
        this.state = {
            products: [],
            cart: [],
            select: ""
        }
    }


    render(){

        return(

            <div>
                <Search />
                <Product />
                <Cart />
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
