import React from 'react';

class List extends React.Component{

    constructor(){
        super()

        this.state={
            products: [],
            showProduct: [],
            searchProduct: []
        }
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
        let showProduct = this.state.showProduct
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

    componentDidMount(){
        let url = `http://localhost:3000/products`
        fetch(url)
          .then(response => response.json())
          .then(data => {this.setState({products: data.products})})
    }

    render(){
        let mapProducts;
        if(this.state.products.length !== 0){
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
        else{
            mapProducts = 'loading'
        }

        return(
            <div>
                <div className='card-header'>
                    <h6>Item List</h6>
                </div>
                <div className='card-body'>
                    {mapProducts}
                </div>
            </div>
        )
    }
}

export default List;