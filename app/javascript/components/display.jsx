import React from 'react';

class Display extends React.Component{

    onClickHandler(event){
         this.props.cart(event)
    }

    render(){
         const products = this.props.item.map((product, index)=>{
                  return (<div key = {index}>
                    <p>Name: {product.name}</p>
                      <img style = {{width: 100}}src = {product.image_url}/>
                      <p>Description:{product.description}</p>
                      <button value = {product.id} onClick = {(event)=>{this.onClickHandler(event)}}>Add to Cart</button>
                  </div>);
                });

        return (
            <div>
            <h1>Product Display</h1>
            <div>{products}</div>

            </div>

            )
    }
}

export default Display