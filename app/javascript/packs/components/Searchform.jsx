import React from 'react'
import axios from 'axios'

class Searchform extends React.Component{
    constructor(){
        super()

        this.state = {
            name: "",
            price: 0
        }
    }

    sortName(event){
        const name = event.target.value;
        this.setState({
            name: name
        })
    }

    sortPrice(event){
        const price = parseInt(event.target.value);
        this.setState({
            price: price
        })
    }

    sortProducts(){
        const url = '/products/index.json';

        const payload = {params:{
            name: this.state.name,
            price: this.state.price
        }}

        console.log(payload)

        axios.get(url, payload)
        .then((response) => {
            console.log(response)
            const data = response.data

            this.props.searchProduct(data)

        }).catch((error)=>{
            console.log("there is an error: " + error);
        })
    }

    render(){
        console.log(this.state)
        return(
            <div>
                <input placeholder="Search by name" onChange={() => {this.sortName(event)}}/>
                <select onChange={() => {this.sortPrice(event)}}>
                    <option value={0}>Sort by Price</option>
                    <option value={10}>Under $10</option>
                    <option value={20}>Under $20</option>
                    <option value={30}>Under $30</option>
                </select>
                <button onClick={()=>{ this.sortProducts() }}>
                  Sort Products
                </button>
            </div>
        )
    }
}

export default Searchform