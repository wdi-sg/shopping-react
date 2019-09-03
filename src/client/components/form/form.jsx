import React from 'react';

import styles from './style.scss';


class ProductDetail extends React.Component {
    render() {
        return ( <div>
                <h3> Details </h3>
                <p> name: {this.props.product.name} </p>
                <p> price: {this.props.product.price} </p>
                <p> description: {this.props.product.description} </p>
            </div>
            );
    }
}


class ProductList extends React.Component {

    showDetail(event, product){
        console.log("add it!!!!!==> " + product.name);
        this.props.showDetail(product);
    }


    render() {
        let itemsElements = this.props.items.map((item, index) => {
          return (
            <li key={index}>
                <button onClick={(event) => {this.showDetail(event, item)}}> {item.name} </button>
            </li>
            );

        });
        return ( <div>
            <h3>List of Products:</h3>
            <ul>
                {itemsElements}
            </ul>
        </div>
        );
    }
}



class Form extends React.Component {

  constructor() {
    super();
    this.state = {
        message: "hello",
        searchText: '',
        products: [],
        foundList: [],
        currentProduct: {}
    };
    // this.handleClick = this.handleClick.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.selectedProduct = this.selectedProduct.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3000/products')
      .then(data => data.json())
      .then((data) => { this.setState({ products: data.products }) });
  }


  changeHandler(event) {
    let currentValue = this.state.searchText;
    currentValue = event.target.value;
    this.setState({searchText: currentValue});
    console.log("state: ", this.state.searchText);

    // based on searchText we will display items accordingly.
    let itemArray = this.state.products;
    // let word = this.state.searchText;
    let foundItems = []; // clear items inside list to begin with

    itemArray.map(item => {
        // console.log(item.name);
        // console.log (item.name.toLowerCase().includes(word));

        if (item.name.toLowerCase().includes(currentValue.toLowerCase())) {
            // console.log("*************");
            // console.log("found:", item.name);
            foundItems.push(item);

        }
    });

    this.setState({foundList: foundItems});
    console.log(this.state.foundList);
  }

    selectedProduct(product){
        console.log("GOING TO SHOW THIS PRODUCT: ", product);
        this.setState({currentProduct: product});
    }

  render() {
    return(
      <div>
        <h3>Search:</h3>
        <input className={styles.name} onChange={(event)=>{this.changeHandler(event);}} value={this.state.searchText}/>
        <ProductList items={this.state.foundList} showDetail={this.selectedProduct} />
        <ProductDetail product={this.state.currentProduct} />
      </div>
    );
  }
}

export default Form;