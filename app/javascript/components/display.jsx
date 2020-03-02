import React from 'react'

export default class Display extends React.Component {

    selectionToCartHandler(product){

        this.props.selectionToCartLifter(product)

    }

    render(){
        let productView
        if (this.props.product.name){
            productView = <div><p>{this.props.product.name}</p><p>{this.props.product.description}</p>
            <p>{this.props.product.price}</p><button onClick={(e)=>{this.selectionToCartHandler(this.props.product)}}>Put in cart!</button></div>
        }


        return(
            <div>{productView}</div>
            
        )
    }
}