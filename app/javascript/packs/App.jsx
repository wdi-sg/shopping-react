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
      results: []
    }
  }

setSearchTerm(input){
  this.setState({search_term:input});
  console.log('search_term:',input);

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
            const term = this.state.term.toLowerCase();

                if(prodToLc.includes(term)) {
                    tempArr.push(prodToLc)
                }
            })
                // Set the filtered state based on search term
                this.setState({
                  results: tempArr
                });
          }).catch((error)=>{
          console.log(error);
        })
}

    render(){
      return(
        <div className = "container">
          <div className ="row">
            <div className ="col-1">
              <Search setSearchTerm = {(input)=>{this.setSearchTerm(input)}} term = {this.state.search_term}/>
            </div>
            <div className = "col-2">
            <Product />
            </div>
          </div>
        </div>
        );
    }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App name="Shopper" />,
    document.body.appendChild(document.createElement('div')),
  )
})
