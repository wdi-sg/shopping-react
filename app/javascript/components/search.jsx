import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import axios from 'axios';
import Slider from '../components/slider'

class Search extends React.Component {
  constructor(){
    super();
    this.state = {
      input: "",
      products: []
    }
  }

  updateInput(currentInput){
    console.log(currentInput)
    this.setState({input: currentInput})
  }

  getProducts(index){
    var url;

    if (index == null){
      console.log("In getProducts()")
      url = (this.state.input ? ('/products?query='+ this.state.input + '.json') : "/products.json")
      console.log("url is " + url)
    } else {
      url = (this.state.input ? ('/products?query='+ this.state.input + '&slice=' + index + '.json') : "/products.json")
      console.log(url)
    }

   axios.get(url)
    .then((response) => {
      console.log("Sending Ajax ")
      const data = response.data
      this.setState({ products: response.data })
    }).catch((error)=>{
      console.log(error);
    })
  }

  render() {
     var products = this.state.products.map(product => {
      return <li class="list-group-item">{product.name}<button onClick={(evt)=>this.props.chooseProduct(product.id)}>Click Here </button></li>
    })

     //<Slider selectProduct={(index)=>{this.props.chooseProduct(index)}} list={this.state.products}/>

     
    return (
        <div>
          <input type="text" onChange={(evt)=>{this.updateInput(evt.target.value)}} value={this.state.input}/>
            <button onClick={(evt) => this.getProducts()}>Submit</button>
            <div>

                  <div><button onClick={(evt) => this.getProducts(1)}>1</button></div>
                  <div><button onClick={(evt) => this.getProducts(5)}>2</button></div>
                  <div><button onClick={(evt) => this.getProducts(8)}>3</button></div>
            </div>
            <div>
              {products}
            </div>
          </div>
    );
  }
}


export default Search;


