import React from 'react';

import styles from './style.scss';

class Form extends React.Component {
  constructor() {
    super();
    this.changeHandler = this.changeHandler.bind( this );
    this.clickHandler = this.clickHandler.bind( this );
    this.sortHandler = this.sortHandler.bind( this );
    this.state = {
        search : "",
        list: [],
    };
}

changeHandler(event){
    this.setState({search: event.target.value});
}

clickHandler(){
    // console.log(event.target.value)
        var that = this;
        // what to do when we recieve the request
        var responseHandler = function() {
            console.log(this.responseText);
            that.setState({list:[]})
          that.setState({search: ""});
        var searchresult = JSON.parse(this.responseText);
        var array = that.state.list;
        for(var i = 0 ; i< searchresult.items.length; i++){
            array.push(searchresult.items[i]);
        }
        that.setState({list:array});
      };

        // make a new request
        var request = new XMLHttpRequest();

        // listen for the request response
        request.addEventListener("load", responseHandler);

        // ready the system by calling open, and specifying the url
        request.open("GET", `http://localhost:3000/query?search=${this.state.search}`);

        // send the request
        request.send();
    }

sortHandler(event){
    let sortInput = event.target.value;
    if(sortInput === "1"){
    var sorted = this.state.list;
    sorted.sort(function(a, b) {
      if (a["salePrice"] > b["salePrice"]) {
        return 1;
      }
      if (a["salePrice"] < b["salePrice"]) {
        return -1;
      }
      return 0;
    });
    this.setState({list:sorted});
}else if (sortInput === "2"){
    var sorted = this.state.list;
     sorted.sort(function(a, b) {
      if (a["salePrice"] > b["salePrice"]) {
        return -1;
      }
      if (a["salePrice"] < b["salePrice"]) {
        return 1;
      }
      return 0;
    });
    this.setState({list:sorted});

}

}

   render() {
      // render the list with a map() here
      console.log("rendering");
      return (
        <div>
            <input onChange={this.changeHandler} value={this.state.search}/>
            <button className = "search" onClick = {this.clickHandler}>search</button>
            <select onChange = {this.sortHandler}>
            <option>Sort Options</option>
            <option value = "1">Sort by price ascending</option>
            <option value = "2">Sort by price descending</option>
            </select>
            <div className = "List">
                <h1>Search for Walmart Products</h1>
                <ListItem counter = {this.state.list}/>
            </div>
        </div>
      );
  }
}


class ListItem extends React.Component {
    render() {
        return (
            <ul className = "list-group">
                {this.props.counter.map((listitem , index)=>{
                return <li className = "list-group-item"> <img src = {listitem.mediumImage}/>
                    <h6>
                        {listitem.name}
                    </h6>
                    <p>
                        {listitem.shortDescription}
                    </p>
                    <hr/>
                    <small>${listitem.salePrice}</small>
                </li>
                })}
            </ul>
        );
    }
}



export default Form;