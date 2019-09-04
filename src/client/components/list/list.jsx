import React from 'react';
import Search from '../search/search'

class List extends React.Component{

    constructor(){
        super()

        this.state={
            products: [],
            showProduct: [],
            searchProducts: []
        }
    }

    receiveSearch(value){
        console.log("in the list class inside receiveSearch: ", value)
        let products = this.state.products
        console.log('product array: ', products)
        let searchProducts = this.state.searchProducts
        let newArray = products.filter(obj=>{
            let name = obj.name.toLowerCase()
            return name.includes(value)
        })
        this.setState({searchProducts: newArray})
        console.log(searchProducts)
  }


    searchShowHandler(){
        let searchProduct = this.state.searchProduct[0]
        this.props.searchShowHandler(searchProduct)
    }

    searchItem(value){
        console.log(value)
        let searchProduct = this.state.searchProduct
        if (searchProduct.length !== 0){
            searchProduct[0] = value
            this.setState({searchProduct: searchProduct})
            this.sendHandler()
        }
        else{
            searchProduct.push(value)
            this.setState({searchProduct: searchProduct})
            this.sendHandler()
        }
    }


    sendHandler(){
        let showProduct = this.state.showProduct[0]
        this.props.sendHandler(showProduct)
    }

    showItem(){
        let value = event.target.value
        let products = this.state.products
        let searchProducts = this.state.searchProducts
        let showProduct = this.state.showProduct
        if(searchProducts.length !== 0){
            let newSearchProduct = searchProducts[value]
            if(showProduct.length !== 0){
                showProduct[0] = newSearchProduct
                this.setState({showProduct: showProduct})
                this.sendHandler()
            }
            else{
                showProduct.push(newSearchProduct)
                this.setState({showProduct: showProduct})
                this.sendHandler()
            }
        }
        else{
            console.log("hii")
            let newProduct = products[value]
            if (showProduct.length !== 0){
                showProduct[0] = newProduct
                this.setState({showProduct: showProduct})
                this.sendHandler()
            }
            else{
                showProduct.push(newProduct)
                this.setState({showProduct: showProduct})
                this.sendHandler()
            }
        }
    }

    componentDidMount(){
        let url = `http://localhost:3000/products`
        fetch(url)
          .then(response => response.json())
          .then(data => {this.setState({products: data.products})})
    }

    render(){
        let mapProducts;
        if(this.state.searchProducts.length !== 0){
            mapProducts = this.state.searchProducts.map((product,index)=>{
                return(
                    <div className='row form-inline' key={index}>
                        <div className='col-6'>
                            <p>Name: {product.name}</p>
                        </div>
                        <div className='col-3 offset-3'>
                            <button className='btn btn-sm btn-outline-primary' onClick={()=>{this.showItem()}} value={index}>Show Item</button>
                        </div>
                        <br />
                        <br />
                    </div>
                )
            })
        }
        else{
            mapProducts = this.state.products.map((product,index)=>{
                return(
                    <div className='row form-inline' key={index}>
                        <div className='col-6'>
                            <p>Name: {product.name}</p>
                        </div>
                        <div className='col-3 offset-3'>
                            <button className='btn btn-sm btn-outline-primary' onClick={()=>{this.showItem()}} value={index}>Show Item</button>
                        </div>
                        <br />
                        <br />
                    </div>
                )
            })
        }

        return(
            <div>
                <div className='card-header'>
                    <h6>Item List</h6>
                </div>
                <div className='card-body'>
                    <Search searchItem={(value)=>{this.receiveSearch(value)}}/>
                    {mapProducts}
                </div>
            </div>
        )
    }
}

export default List;