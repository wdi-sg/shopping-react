import React from 'react';

class Products extends React.Component{
    render(){
        const products = this.props.products.map((product, index)=>{
          return (
            <div>
                <p>{product.name}</p>
                <img src={product.image_url} />
            </div>
          );
        });

        return(
            <div>
                {products}
            </div>
        )
    }
}

export default Products