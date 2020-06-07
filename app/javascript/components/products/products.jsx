import React, {Component} from 'react';
import Cart from '../cart/cart';

export default class Products extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
            price: [],
            subtotal: 0
        }
    }

    clickHandler(event) {
        let price = parseInt(event.target.parentNode.parentNode.parentNode.children[1].innerText.substring(1));
        let productName = event.target.parentNode.parentNode.parentNode.children[0].firstChild.innerText;

        let addedProduct = this.state.products;
        let addedPrice = this.state.price;
    
        addedProduct.push([productName, price])
        addedPrice.push(price)

        let subtotal = addedPrice.reduce((accumulator, currentValue) => accumulator + currentValue)

        this.setState({
            products: addedProduct,
            price: addedPrice,
            subtotal: subtotal
        })
    }

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
                                    <button 
                                        className='cart-icon'
                                        onClick={(event)=>{this.clickHandler(event)}}>
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
            <div className='col-9'>
                <div className='row'>
                    <div className='col-7'>
                        <h2>Products</h2>
                        {allProducts}
                    </div>
                    <Cart 
                        products={this.state.products}
                        subtotal={this.state.subtotal}/>
                </div>
            </div>
        )
    }
}