import React from 'react';
import { hot } from 'react-hot-loader';

import Search from './components/search/search';
import Product from './components/product/product';
import Form from './components/form/form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      item:'hahaha',
       
      products: [],
      list: [],
    

    };
    this.search = this.search.bind(this)
    this.display = this.display.bind(this)
  }

  componentDidMount() {
    fetch('/products')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            products: result.products
          });
        },
        
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  } 
  search (){
    var list = this.state.products;
    console.log(list)
    this.setState({list: list});
    

  };
  display(e) {
    var id = e.target.id -1;
    console.log(id)
    this.setState({item: this.state.products[id]})
    
  }


  

  render() {
    const { error, isLoaded, products} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
    return (
      <div>

        
        <Product item = {this.state.item}/>
        <Search list = {this.state.list} search = {this.search} display = {this.display}/>
      </div>
    );
  }
}






/*&&&&&&&&&&&&&&&&&&&&&&&&&&&*/



  // render() {
  //   const { error, isLoaded, products, list} = this.state;
  //   if (error) {
  //     return <div>Error: {error.message}</div>;
  //   } else if (!isLoaded) {
  //     return <div>Loading...</div>;
  //   } else {
  //     return (
  //       <div>
  //         <button onClick = {this.search}>Search</button>
  //         <div >{this.state.item.price}</div>
  //         <ol>
  //           {list.map(product => (
  //             <li key={product.id}>
  //               <a id = {product.id} onClick ={this.display}>{product.name}</a>
  //             </li>
  //           ))}
  //       </ol>
  //       </div>
  //     );
  //   }
  // }
}

export default hot(module)(App);