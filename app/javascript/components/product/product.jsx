import React from 'react';

class Product extends React.Component {
    render() {

        // const product = this.props.products.map((product, index)=>{
        //     return (
        //     <React.Fragment key = {index}>
        //         <ol>
        //             <li>{product.title}</li>
        //             <img src={product.image} />
        //             <li>{product.price}</li>
        //             <li>{product.content}</li>
        //         </ol>
        //     </React.Fragment>);
        // });

        return (
          <div>
            <h3>About Product</h3>
            {/* {product} */}
          </div>
        );
    }
}

export default Product;