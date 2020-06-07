import React, {Component} from 'react';

export default class Products extends Component {
    render() {

        let allProducts;
        if (this.props.products != undefined) {
            allProducts = this.props.products.map((product, index)=>{
                if (product.name.toLowerCase().includes(this.props.searchTerm.toLowerCase())) {
                    return (
                        <div className="card mb-3" key={product.id}>
                            <img className="card-img-top" src={product.image_url} alt={product.name} />
                            <div className="card-body">
                                <div className='title'>
                                    <h5 className="card-title">{product.name}</h5>
                                    <button className='cart-icon'>
                                        <i className='fa fa-shopping-cart'></i>&nbsp;&nbsp;
                                        <p>Add to Cart</p>
                                    </button>
                                </div>
                                <h6 className="card-text">${product.price}</h6>
                                <p className="card-text">{product.description}</p>
                            </div>
                        </div>
                    )
                }
            });
        }
        return(
            <div className='col-5'>
                <h2>Products</h2>
                {allProducts}
            </div>
        )
    }
}