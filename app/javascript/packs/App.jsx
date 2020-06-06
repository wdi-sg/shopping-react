// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.
import React from 'react'
import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types'
import axios from 'axios';
import Search from '../components/Search'
import Product from '../components/Product'

class App extends React.Component {
  constructor(){
    super()
    console.log("rendering App");
    this.state = {
      search_term: "",
      prod_name: "",
      prod_index:0,
      results: []
    }
  }

  setSearchTerm(input){
    this.setState({search_term: event.target.value});
    console.log('search_term:',event.target.value);

     var tempArr=[];
        const url = '/products.json';
        axios.get(url)
          .then((response) => {
            const data = response.data
            console.log("Here's the data:", data)
            let productNames = data.map((product) => product.name)
            console.log('product names:', productNames)
            productNames.filter(name => {
               // change product name to lowercase
              const prodToLc = name.toLowerCase();
              console.log(prodToLc)
               // change search term  to lowercase
              let keyword = this.state.search_term.toLowerCase();
                  if(prodToLc.includes(keyword)) {
                      tempArr.push(prodToLc)
                  }
              })
                  // Set the filtered state based on search term
                  this.setState({
                    results: tempArr
                  });

              console.log('RESULT ARR:', this.state.results)

            }).catch((error)=>{
            console.log(error);
          })
  }

  getProd(name,i){
    let prodName = name
    let index = parseInt(i)
    this.setState ({prod_name: name, prod_index: index})

    console.log('prod name & index are:', prodName + index)
  }


    render(){
      console.log('USER SEARCH INPUT ', this.state.search_term)
      return(
        <div className = "container">
          <div className ="row">
            <div className ="col-1">
              <Search setSearchTerm = {(input)=>{this.setSearchTerm(input)}} term = {this.state.search_term} results = {this.state.results} getProd = {(product,index)=>{this.getProd(product,index)}}/>
            </div>
            <div className = "col-2">
            <Product name = {this.state.prod_name}/>
            </div>
          </div>
        </div>
        );
    }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App name="Shopper"/>,
    document.body.appendChild(document.createElement('div')),
  )
})
