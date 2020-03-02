import React from 'react'
import axios from 'axios';

export default class Search extends React.Component {

    constructor(){
        super()
        this.state = {
            products: [],
            input: ""
        }
    }

    getProducts(){

        const url = 'http://127.0.0.1:3000/products.json';

        axios.get(url)
          .then((response) => {

            const data = response.data

            this.setState({products: data})
            this.props.allProductsLifter(data)

          }).catch((error)=>{
            console.log(error);
          })
      }

    selectProduct(index){

        const productURL = "products/"+index+".json"

        axios.get(productURL)
          .then((response) => {

            const data = response.data
            console.log("data", data)
            
            this.props.singleProductLifter(data)

          }).catch((error)=>{
            console.log(error);
          })
      }

      submitHandler(e){
          e.preventDefault()
          const input = e.target.elements.input.value
          this.setState({input: input})
          this.getProducts()

      }

    render(){

        const allProducts = this.props.products.map((product, index)=>{

            return <a className="btn" onClick={(e)=>{this.selectProduct(index+1)}} key={index}>{product.name}</a>

        })

        const filtered = this.state.products.filter((product, index)=>{

            return product.name.includes(this.state.input)

        })

        const products = this.filtered.map((product, index)=>{

            return <a className="btn" onClick={(e)=>{this.selectProduct(index+1)}} key={index}>{product.name}</a>

        })

        return(
            <div>
                <form onSubmit={(e)=>{this.submitHandler(e)}}>
                    <input type="text" name="input"/>
                    <button type="submit">Get Products</button>
                </form>
                <button onClick={()=>{this.getProducts()}}>Get all Products</button>
                {allProducts}
            </div>
        )
    }
}