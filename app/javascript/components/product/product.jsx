import React from 'react';

class Product extends React.Component {
    render() {
        const products = this.props.products.map((product, index)=>{
            return (
            <React.Fragment key = {index}>
                <ol>
                    <li>{product.title}</li>
                    <img src={product.image} />
                    <li>{product.price}</li>
                    <li>{product.content}</li>
                </ol>
            </React.Fragment>);
        });

        return (
          <div>
            <h1>Products:</h1>
            {products}
          </div>
        );
    }
}

export default Product;