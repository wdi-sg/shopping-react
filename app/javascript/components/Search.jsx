import React from 'react'
import axios from 'axios';

class Search extends React.Component {
    constructor(){
    super()
    console.log("rendering product");
    this.state = {
      term : ""
    }
  }

  getValue(event){
    this.setState({term:event.target.value});
    console.log('term:',event.target.value)
  }

  fetchResult(){
  const url = '/products.json';
  axios.get(url)
    .then((response) => {

      const data = response.data
      // this.setState({ posts: data })
      console.log("Here's the data:", data)
    }).catch((error)=>{
      console.log(error);
    })
}

    render(){

        return(
            <div class="container">
              <div class="row">
                <h1>Search Product:</h1>
                  <input type="text" onChange={()=> {this.getValue(event)}} value = {this.state.term}/>
                  <button onClick={()=>{ this.fetchResult() }}> Search </button>
              </div>
            </div>
        );
    }
}

export default Search;
