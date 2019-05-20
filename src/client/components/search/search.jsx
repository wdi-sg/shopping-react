import React from 'react';

import styles from './style.scss';

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
        let newItems = this.state.items;
        let clickedItem = newItems[index];

        let newCurrItem = this.state.currItem;
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
            <div>
                <h4>Search</h4>
                <input className={styles.searchbox} placeholder="Search Input"/>
                <button onClick={()=>{this.makeAjaxCall()}}>Search</button>
                {items}
            </div>
        );
    }
}

export default Search;