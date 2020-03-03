import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

export default class Search extends Component {
    constructor() {
        super()

        this.state = {
            products: []
        }
    }

    onItemClick(number) {
        this.props.setActiveItem(number)
    }

    getProducts() {
        const url = '/products.json';
        axios.get(url)
          .then((response) => {
            const data = response.data
            this.setState({ products: data })
          }).catch((error)=>{
            console.log(error);
          })
      }


    render() {
        return (       
            <div>
                <SearchBox getProducts={() => {this.getProducts()}} />
                <ProductList products={this.state.products}
                    onItemClick={(number) => {this.onItemClick(number)}}
                />
            </div>
        )
    }
}


class SearchBox extends Component {

    getProducts () {
        this.props.getProducts();
    }

    render() {
        return (
        <Button color="primary" 
            variant="contained"
            onClick={()=>{ this.getProducts() }}>
                Click me to search
        </Button>
        )
    }
}


class ProductList extends Component {

    onItemClick(event) {
        let number = event.target.id
        this.props.onItemClick(number)
    }

    render() {

        let productList = []
        if (this.props.products.length > 0) {
            productList = this.props.products.map((item, index) => {
                return (
                    <TableRow id={item.id} 
                    key={index} 
                    onClick={(event)=>{this.onItemClick(event)}}>
                        <TableCell id={item.id}>
                            {item.name}
                        </TableCell>
                        <TableCell id={item.id} align="right">
                            ${item.price}
                        </TableCell>
                    </TableRow>
                )
            }
            )
    }

        return (
            <TableContainer>
                <Table size="small" aria-label="search-results">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {productList}
                    </TableBody>
                </Table>
            </TableContainer>
                
        )
    }
}