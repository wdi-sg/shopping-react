import React, { Component } from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete';

export default class Cart extends Component {
    constructor() {
        super()
    }

    removeFromCart(number) {
        this.props.removeProductFromCart(number)
    }

    render() {
        return (
            <div>
                <CartItems
                    products={this.props.shoppingCart} 
                    removeFromCart={(event)=>{this.removeFromCart(event)}}
                />
                <Totals shoppingCart={this.props.shoppingCart} />
            </div>
        )
    }
}


export class CartItems extends Component {
    render() {
        let cartArray = []   
        if (this.props.products !== undefined) {
            if (this.props.products) {
                cartArray = this.props.products.map((item, index) => {
                    return (
                    <CartItem item={item}
                        index={index}
                        id={index}
                        key={index}
                        removeFromCart={(event)=>{this.props.removeFromCart(event)}}
                    />
                    )
                })
        }
    }

        return (
            <TableContainer component={Paper} m={2}>
                <Table size="small" aria-label="shopping cart">
                    <TableHead>
                        <TableRow>
                            <TableCell>Item</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cartArray}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}


class CartItem extends Component {

    removeFromCart(number) {
        console.log(number)
        this.props.removeFromCart(number)
    }

    render() {
        return (
            <TableRow key={this.props.index} id={this.props.item.id}>
                <TableCell component="th" scope="row">
                    {this.props.item.name}
                </TableCell>
                <TableCell align="right">{this.props.item.price}</TableCell>
                <TableCell>
                    <Button color="secondary" id={this.props.index}
                    onClick={() => {this.removeFromCart(this.props.index)}}>
                        <DeleteIcon/>
                    </Button>
                </TableCell>
            </TableRow>
        )
    }
}


class Totals extends Component {
    render() {
        return (
            <div>
                <SubTotal shoppingCart={this.props.shoppingCart} />
            </div>
        )
    }
}


class SubTotal extends Component {
    render() {
        let subTotal = 0
        for (let item of this.props.shoppingCart) {
            subTotal += parseFloat(item.price)
        }
        let GST = ((subTotal / 107) * 7).toFixed(2)
        subTotal = subTotal
        return (
            <div>
            <h3 align="right">Sub-total ({this.props.shoppingCart.length} items): ${subTotal.toFixed(2)}</h3>
            <h3 align="right">GST: ${GST}</h3>
            <Shipping />
            <h2 align="right">Grand Total: ${(subTotal + 7).toFixed(2)}</h2>
            </div>
        )
    }
}


class Shipping extends Component {
    render() {
        return (
            <h3 align="right">
                Shipping: $7
            </h3>
        )
    }
}