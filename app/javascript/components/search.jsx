import React from 'react'
import axios from 'axios';

export default class Search extends React.Component {

    constructor(){
        super()
        this.state = {
            input: ""
        }
    }

    componentDidMount(){
        this.getProducts("")
    }

    getProducts(e){

        this.setState({input: e.toLowerCase()})

        const url = 'http://127.0.0.1:3000/products.json';

        axios.get(url)
          .then((response) => {

            const data = response.data

            const products = data.filter((product)=>{

                return product.name.toLowerCase().includes(this.state.input)

            })

            this.props.allProductsLifter(products)

          }).catch((error)=>{
            console.log(error);
          })
      }

    selectProduct(productId){

        const productURL = "products/"+productId+".json"

        axios.get(productURL)
          .then((response) => {

            const data = response.data
            console.log("data", data)

            this.props.singleProductLifter(data)

          }).catch((error)=>{
            console.log(error);
          })
      }

      sortByPrice(){

        const products = this.props.products

        products.sort((a,b)=>{

            if (parseInt(a.price) < parseInt(b.price)){
                return -1
            }
            if (parseInt(a.price) > parseInt(b.price)){
                return 1
            }
            return 0
        })

        this.props.allProductsLifter(products)
      }

      sortByName(){

        const products = this.props.products

        products.sort((a,b)=>{

            if (a.name < b.name){
                return -1
            }
            if (a.name > b.name){
                return 1
            }

            return 0
        })

        this.props.allProductsLifter(products)

      }

    render(){

        const allProducts = this.props.products.map((product, index)=>{

            return <a className="btn" onClick={(e)=>{this.selectProduct(product.id)}} key={index}>{product.name}:{product.price}</a>

        })

        let sortByPriceButton
        if (allProducts[0]){
            sortByPriceButton = <button onClick={()=>{this.sortByPrice()}}>Sort by Price</button>
        }

        let sortByNameButton
        if (allProducts[0]){
            sortByNameButton = <button onClick={()=>{this.sortByName()}}>Sort by Name</button>
        }

        return(
            <div>
                {sortByPriceButton}{sortByNameButton}
                <input onChange={(e)=>{this.getProducts(e.target.value)}} placeholder="Search product"/>
                {allProducts}
            </div>
        )
    }
}