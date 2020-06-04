import React from 'react';

class Productdisplay extends React.Component{
    render(){
        const product = this.props.product
        return(
            <div>
                <img src={product.image_url}/>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <p>{product.description}</p>
            </div>
        )
    }
}

export default Productdisplay