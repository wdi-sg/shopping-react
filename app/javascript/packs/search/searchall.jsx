import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class Form extends React.Component {

    constructor(){
      console.log("constructing");
        super()
      this.state = {
            products:[],
            search: "",
            value: ""
        }

            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
 
      }

      showProduct(key){
        const url = '/products/' + key + '.json';
        console.log(url)
          axios.get(url)
            .then((response) => {
              
              const data = response.data
              console.log(data)
              this.props.productCallback(data)
        
            }).catch((error)=>{
              console.log(error);
            })
      }

      searchName(event){
          this.state.search = event.target.value
          let searchQuery = this.state.search
          console.log("ggetting stuff")
          const url = '/products.json';
        
          axios.get(url)
            .then((response) => {
              
              const data = response.data
            let filtered = data.filter((product)=>{
                return product.name.includes(searchQuery)
            })
              console.log(filtered)
              this.setState({ products: filtered })
        
            }).catch((error)=>{
              console.log(error);
            })
      }

      handleChange(array) {
          console.log("JADASHDHADHSD")
          console.log(array)
          let lowestsort = array.sort((a,b) =>  a.price-b.price)
            this.setState({ products: lowestsort })
      }

      handleSubmit(event) {
        event.preventDefault();
      }


      render() {

        let filteredproducts = this.state.products

        const productArray = this.state.products.map((product)=>{
            return (<div>
                <p>id: {product.id} || name: {product.name} || Price: {product.price} ||content: {product.description} 
                <button key={product.id} onClick ={()=>{this.showProduct(product.id)}}></button>
                </p>
                </div>)
        })


       return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <select onChange = {()=> {this.handleChange(filteredproducts)}} name="Options">
                    <option value = "">choose an option</option>
                    <option value = "">Price</option>
                </select>
                </form>
            <input onChange = {(event) => {this.searchName(event);}}></input> 
            {productArray}
            </div>
        );
      }
    }
    
    export default Form;