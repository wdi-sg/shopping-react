import React from 'react';

class Viewproduct extends React.Component {

    render() {

        let product = this.props.product.map((product, index) => {
            return (<div>
                <ul>
                    <li key={product.id}></li>
                    <li>{product.name}</li>
                    <br />
                </ul>
            </div>);
        });

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
                <h1>Here's the product</h1>
                {product}
                <button>add to cart</button>
            </div>
        );
    }

}

export default Viewproduct;