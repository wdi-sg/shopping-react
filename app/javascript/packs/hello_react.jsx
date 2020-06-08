// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import axios from "axios";
import Search from "../packs/components/Search";
import Product from "../packs/components/Product";
import Cart from "../packs/components/Cart";


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchParams: "",
      sortParams: "",
      productDb:[],
      searchDb:[],
      currentProduct:"",
      inCart:[]
    };
    this.handleItemClick = this.handleItemClick.bind(this)
    this.handleAddProduct = this.handleAddProduct.bind(this)
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this)


  }
  getProducts(){

    const url = '/products.json';
  
    axios.get(url)
      .then((response) => {
  
        const data = response.data
        data.sort(this.compareName)
        this.setState({ productDb: data })
        this.setState({ searchDb: data })

      }).catch((error)=>{
        console.log(error);
      })
  }
  

  componentDidMount(){
    this.getProducts();
  }
  handleSearch(event){
    this.setState({searchParams: event.target.value})
    if(this.state.searchParams ==""){
      this.setState({searchDb: this.state.productDb})
    }
    else{
      this.updateProductList();
    }
  }
  handleSort(event){
    this.setState({sortParams: event.target.value})
    this.updateSorting();

  }
  handleItemClick(product){
    console.log(product)
    this.setState({currentProduct: product})

  }
  updateProductList(){
    var fullProducts = this.state.productDb;
    var searchParams = this.state.searchParams;
    var searchedProducts = fullProducts.filter(
      function(product) {
        return product.name.toLowerCase().indexOf(searchParams.toLowerCase()) !== -1
        })
    
    if(this.state.sortParams =="name"){
      searchedProducts.sort(this.compareName)
      console.log(searchedProducts)
    }
    else if (this.state.sortParams =="price"){
      searchedProducts.sort(this.comparePrice)
      
    }
    this.setState({searchDb: searchedProducts})  
   }

   updateSorting(){
    var searchedProducts = this.state.searchDb;

    if(this.state.sortParams =="name"){
      searchedProducts.sort(this.compareName)
      console.log(searchedProducts)
    }
    else if (this.state.sortParams =="price"){
      searchedProducts.sort(this.comparePrice)
      
    }
    this.setState({searchDb: searchedProducts})  
   }
  
  compareName(a, b) {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  }
  comparePrice(a, b) {
    const priceA = parseFloat(a.price);
    const priceB = parseFloat(b.price);

    let comparison = 0;
    if (priceA > priceB) {
      comparison = 1;
    } else if (priceA < priceB) {
      comparison = -1;
    }
    return comparison;
  }
  handleAddProduct(productCount){
    // console.log(productCount)
    var cartItem = {product: this.state.currentProduct, count:productCount}
    var currentCart = this.state.inCart;
    currentCart.push(cartItem)
    this.setState({inCart:currentCart})
  }

  handleRemoveFromCart(cartId){
    // console.log(productCount)
    var currentCart = this.state.inCart;
    currentCart.splice(cartId,1)
    this.setState({inCart:currentCart})
  }

  render() {
    return (
      <div className="row text-center border">
        <Search handleSearch={(event)=>{this.handleSearch(event)}} searchDb={this.state.searchDb} handleSort={(event)=>{this.handleSort(event)} } sortBy={this.state.sortParams} handleItemClick={this.handleItemClick}/>
        
        <Product currentProduct={this.state.currentProduct} handleAddProduct={this.handleAddProduct}/>
        <Cart inCart={this.state.inCart} handleRemoveFromCart={this.handleRemoveFromCart} handleItemClick={this.handleItemClick}/>
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement("div"))
  );
});
