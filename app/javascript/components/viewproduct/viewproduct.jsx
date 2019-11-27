import React from 'react';

class Viewproduct extends React.Component {
    constructor() {
        super();
    }

    render() {
        const product = this.props.product;
        // let product = this.props.product.map((product, index) => {
        //     return (<div>
        //         <ul>
        //             <li key={product.id}></li>
        //             <li>{product.name}</li>
        //             <br />
        //         </ul>
        //     </div>);
        // });

        console.log("selecte product is", product)

        // let description = '';
        // let price = '';

        // if (product) {
        //     // if product exists, show it. But must have click first....
        //     description = product.description;
        //     price = product.price;
        // }

        return (
            <div>
                <h3>Product Details</h3>
                <p>Product: {product.name}</p>
                <p>Price: ${product.price}</p>
                <p>Description: {product.description}</p>
            </div>
        );
    }

}

export default Viewproduct;