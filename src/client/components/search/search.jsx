import React from 'react';

import styles from './style.scss';

import Product from '../product/product';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [],
            currItem: [],
        };
        this.makeAjaxCall = this.makeAjaxCall.bind(this);
        this.getProductInfo = this.getProductInfo.bind(this);
    }

    makeAjaxCall() {
        // get a hold of component for react
        var reactThis = this;

        var reqListener = function() {

            const data = JSON.parse(this.responseText);

            reactThis.setState({ items: data.products })
            // console.log(data);

            // this keyword doesnt refer to component
            //this.setState({items:this.responseText})
        }

        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", reqListener);
        oReq.open("GET", "/products");
        oReq.send();
    }

    getProductInfo(e) {
        let index = e.target.id;
        let items = this.state.items;
        let clickedItem = items[index];
        let newCurrItem = [];

        newCurrItem.push(clickedItem);

        this.setState({
            currItem: newCurrItem
        })
    }

    render() {

        const items = this.state.items.map((item, index) => {

            return  <div key={index}
                        id={index}
                        onClick={(e) => {this.getProductInfo(e)}}
                    >
                    {item.name}
                    </div>
        });
        return (
            <div className="container">
                <div className="row">

                    <div className="col">
                        <h4>Search</h4>
                        <input className={styles.searchbox} placeholder="Search Input"/>
                        <button type="button" className="btn btn-primary" onClick={()=>{this.makeAjaxCall()}}>
                        Search</button>
                    </div>

                    <div className="col">
                        <h4>Product</h4>
                    </div>

                </div>

                <div className="row">

                    <div className="col">
                        {items}
                    </div>

                    <div className="col">
                        <Product
                            clickedItem={this.state.currItem}
                        />
                    </div>

                </div>

            </div>

        );
    }
}

export default Search;