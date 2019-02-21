import React from 'react';

import styles from './style.scss';

class Form extends React.Component {
  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
        search: "",
        queryData: []
    };
  }

  handleChange(event) {
    this.setState({
        search: event.target.value
    });
  }

  handleSearch() {
    var reactThis = this;

    var responseHandler = function() {
        const data = JSON.parse(this.responseText);
        console.log("Data", data)
        reactThis.setState ({
            queryData: data.items
        });
    }
    var request = new XMLHttpRequest();

    request.addEventListener("load", responseHandler);
    console.log(this.state.search)
    request.open("GET", `http://localhost:3000/api/query?search=${this.state.search}`);

    request.send();
  }

  render() {
    const items = this.state.queryData.map((item, index)=>{
        return <div>
                    <img src={item.mediumImage}/>
                    <p>Name: {item.name}</p>
                    <p>Price: ${item.salePrice}</p>
                    <p>Seller Info: {item.sellerInfo}</p>
                    <hr/>
               </div>
    })

    return (
      <div>
        <input onChange={this.handleChange} value={this.state.search} />
        <button onClick={this.handleSearch} value={this.state.search}> Search</button>
        <h3> Seach Results: </h3>
        {items}
      </div>
    );
  }
}

export default Form;