import React from 'react';


class Product extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        let product = this.props.clickedItem.map((item, index) => {

            return  <div key={index}>
                        <p>{item.name}</p>
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                        <button type="button" className="btn btn-outline-success" onClick={()=>{this.props.addToCart()}}>Add to cart</button>
                    </div>
        });

        return (
            <div>
                {product}
            </div>
        );
    }
}

export default Product;