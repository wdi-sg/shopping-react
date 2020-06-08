import React from 'react'
import axios from 'axios';
import Product from './product';
import Search from './search';
import Cart from './cart'

class App extends React.Component {
    constructor() {
        super()

        this.state = {
            products:[],
            input:'',
            product: {},
            cart:[]
        };
    }

    componentDidMount(){
        this.getProducts();
    }

    getProducts(){
          const url = '/products.json';
          axios.get(url)
            .then((response) => {
              const data = response.data;

              this.setState({ products: data });
            }).catch((error)=>{
              console.log(error);
            })
    }

    userInput(event){
        this.setState({ input: event.target.value });
        this.getProducts();
    }


    showOneProduct = (index) =>{
        let product = this.state.products[index];
        this.setState({ product: product });
    }

    addToCart = (e) =>{
        let product = this.state.product;
        let cart = this.state.cart;
        const cartProduct = [product, ...this.state.cart];
        this.setState({ cart: cartProduct });
        console.log("hello" + cart)
    }

  render() {

    return (
      <div className="container">
        <div className="row">

            <div className="col-sm-4">
                <Search
                        products={this.state.products}
                        userInput={this.userInput}
                        showOneProduct={this.showOneProduct}
                        input={this.state.input} />
            </div>

            <div className="col-sm-4">
                <Product product={this.state.product} addToCart={this.addToCart}/>
            </div>

            <div className="col-sm-4">
                <Cart cart={this.state.cart} />
            </div>

        </div>
      </div>
    );
  }
}

export default App;