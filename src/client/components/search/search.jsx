import React from 'react';

import styles from './style.scss';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [],
        };
    }

    makeAjaxCall() {
        // get a hold of component for react
        var reactThis = this;

        var reqListener = function() {

            const data = JSON.parse(this.responseText);

            reactThis.setState({ items: data.products })

            // this keyword doesnt refer to component
            //this.setState({items:this.responseText})
        }

        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", reqListener);
        oReq.open("GET", "/products");
        oReq.send();

    }

    render() {

        const items = this.state.items.map((item, index) => {

            return <div key={index}>
                    <p>{item.name}</p>
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