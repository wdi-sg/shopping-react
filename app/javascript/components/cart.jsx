import React, { Component } from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

export default class Cart extends Component {

    render() {
        return (
            <div>
                <CartItems shoppingCart={this.props.shoppingCart} />
            </div>
        )
    }
}


class CartItems extends Component {
    render() {
        let cartArray = this.props.shoppingCart.map((item, index) => {
            return (<CartItem item={item} index={index}/>)
        })

        return (
            <TableContainer componen={Paper}>
                <Table size="small" aria-label="shopping cart">
                    <TableHead>
                        <TableRow>
                            <TableCell>Item</TableCell>
                            <TableCell align="right">Quantity</TableCell>
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
    render() {
        return (
            <TableRow key={this.props.index}>
                <TableCell component="th" scope="row">
                    {this.props.item.name}
                </TableCell>
                <TableCell align="right">{this.props.item.price}</TableCell>
            </TableRow>
        )
    }
}

class Totals extends Component {
    render() {
        return (
            <div>

            </div>
        )
    }
}