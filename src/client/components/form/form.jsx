import React from 'react';

import styles from './style.scss';


class ListMaker extends React.Component{
    constructor(){
        super();

        this.displayProduct = this.displayProduct.bind(this)
    }


    displayProduct(item){
        console.log("display product", item)
        this.props.setProduct(item)

    }

    render(){
        return(
            <div>
                <button onClick={ ()=>this.displayProduct(this.props.item)}>{this.props.item.name}</button>
            </div>
        );
    }
}


class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            search: '',
            queryData: ["banana"],
            product: "",
            image: "",
            description: "",
            price: ""
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.searchWalmart = this.searchWalmart.bind(this);

        this.productDisplay = this.productDisplay.bind(this)

    }

    onChangeHandler(event) {
        console.log(event.target.value)
        this.setState({ search: event.target.value })
    }

    productDisplay(products){
        this.setState({ product: products.name,
                        image: products.mediumImage,
                        description: products.shortDescription,
                        price: products.salePrice})
    }

    //returns an object from Walmart API, direct to ListMaker
    searchWalmart(e) {
        e.preventDefault()

        var reactThis = this;

        function reqListener() {

            const data = JSON.parse(this.responseText);
            // console.log("data", data)

            reactThis.setState({ queryData: data });

        }


        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", reqListener);

        oReq.open("GET", "/api/query?search=" + this.state.search);
        oReq.send();

    }

    testfunction(e){
        e.preventDefault()
    }


    render() {

        let searchReturnList = [];

            if (this.state.queryData.items !== undefined){

                searchReturnList = this.state.queryData.items.map( (item , index)=> {
                    return <ListMaker setProduct = {this.productDisplay} key ={index} item={item} />
                    })


            }else{
                console.log("not mapping as there is no result")
            }


        return (
        <div>
            <h1>Search Form</h1>

            <form onSubmit = {this.searchWalmart}>
            <input onChange={this.onChangeHandler} className={styles.name} placeholder={this.state.search} value={this.state.search} />

            <button type="submit">Submit</button>
            </form>

            <h1>Search Results</h1>
                {searchReturnList}
            <ul>

            </ul>

            <h1>Products</h1>
            <img src={this.state.image} />
            {this.state.product}
            {this.state.description}

            <h5>
            {this.state.price}
            </h5>



      </div>
        );
    }
}

export default Form;