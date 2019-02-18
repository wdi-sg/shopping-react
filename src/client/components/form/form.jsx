import React from 'react';

import styles from './style.scss';

class Form extends React.Component {
  constructor() {
    super();
    this.changeHandler = this.changeHandler.bind( this );
    this.clickHandler = this.clickHandler.bind( this );
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

   render() {
      // render the list with a map() here
      console.log("rendering");
      return (
        <div>
            <input onChange={this.changeHandler} value={this.state.search}/>
            <button className = "search" onClick = {this.clickHandler}>search</button>
            <div className = "List">
                <h1>Search for Walmart Products</h1>
                    <ul>
                    {this.state.list.map((listitem , index)=>{
                    return <li> {listitem.name}<img src = {listitem.thumbnailImage}/> </li>
                    })}
                    </ul>
            </div>
        </div>
      );
  }
}

export default Form;