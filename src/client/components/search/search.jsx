import React from 'react';

import PropTypes from 'prop-types';


 class Results extends React.Component{
     render(){
         return(
             <ul>
             {this.props.item.map((item, i) => (
                 <li key={i}>
                 {item.name}
                 </li>
           ))}
             </ul>
         )
     }

 }

 class SearchShop extends React.Component {
     constructor() {
         super();
         this.doQuery = this.doQuery.bind(this);
         this.changeHandler = this.changeHandler.bind(this);

         this.state = {

             queryData: '',
             queryResult: []
         };
     }

     changeHandler(event) {
         this.setState({ queryData: event.target.value });
         console.log("change", event.target.value);
     }

     doQuery() {
         var doTheSearch = this;
         console.log(this.state.queryData);

         var reqListener = function ()  {


                 let data = JSON.parse(this.responseText);
                 doTheSearch.setState({ queryResult: data.items });

                 console.log('data:',data)

         }

         var doRequest = new XMLHttpRequest();
         var link = "http://localhost:3000/api/query?search=" + doTheSearch.state.queryData;

         // To send a request to a server, we use the open() and send() methods of the XMLHttpRequest object

        doRequest.addEventListener("load", reqListener);
        doRequest.open("GET", link);
        doRequest.send();

     }

     render() {
         return (
         <div>
             <input onChange={this.changeHandler} value={this.state.queryData} />
             <button onClick={this.doQuery}>Search</button>
             <Results item={this.state.queryResult}/>
         </div>
         );
     }
 }

 export default SearchShop;



