import React from 'react'
import axios from 'axios'
import Display from './display'

class Search extends React.Component{
    constructor(){
        super();
        this.state = {
            term: "",
            products: [],
            item: []
        }
    }

    getTerm(event) {
      console.log(event.target.value);
      let term = event.target.value;

      this.setState({term});
    }

    getProducts(){
        let url = '/products.json'
        if (this.state.term) {
            url = '/products/search.json?term=' + this.state.term;
        }
        const whenDone = (response) => {
          const data = response.data
          this.setState({ products: data })
          console.log( "Products retrieved",data );
        }

        const whenError = (error) => {
          console.log(error);
        };

        axios.get(url)
            .then(whenDone)
            .catch(whenError)

    }

    setItem(item){
        this.setState({item});
        console.log( "Item selected", item);
    }

    render(){
        console.log( "rendering", this.state.products);

        // console log the products, this should be an array of objects
        const list = this.state.products.map((product)=>{
          return (<div>
            <p>{product.name}
              <button onClick={() => { this.setItem(product) }}>
                View
              </button>
            </p>
          </div>);
        });

        return(
            <div>
              <div>
                <p>Search
                  <input onChange = {(event) => {
                      this.getTerm(event)
                  }}
                  />
                </p>
                <button onClick={() => { this.getProducts() }}>
                  Click to view products
                </button>
                <h3>Products</h3>
                {list}
              </div>
              <div>
                <Display product={this.state.item} />
              </div>
            </div>
        );
    }

}

export default Search;