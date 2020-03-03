import React from 'react'
import axios from 'axios';

class Search extends React.Component {
    constructor(){
    super()
    console.log("rendering search");
    this.state = {
      term : "",
      results: []
    }
  }

  fetchResult(){
    this.setState({term:event.target.value});
    console.log('term:',event.target.value);
    var tempArr=[];

      const url = '/products.json';
      axios.get(url)
        .then((response) => {
          const data = response.data
          console.log("Here's the data:", data)
          let productNames = data.map((product) => product.name)
          console.log('product names:', productNames)
          productNames.filter(name => {
             // change product name to lowercase
            const prodToLc = name.toLowerCase();
            console.log(prodToLc)
             // change search term  to lowercase
            const term = this.state.term.toLowerCase();

                if(prodToLc.includes(term)) {
                    tempArr.push(prodToLc)
                }
            })
                // Set the filtered state based on search term
                this.setState({
                  results: tempArr
                });
          }).catch((error)=>{
          console.log(error);
        })
  }
    render(){
        console.log('state results:', this.state.results)

      // const displayRes = this.state.results.map((res)=>{
      //     return (<li>
      //       {res}
      //     </li>);
      //   });

        return(
            <div className="container">
              <div className="row">
                <h1>Search Product:</h1>
                  <input type="text" onChange={()=> {this.fetchResult(event)}} value = {this.state.term}/>


                  <h2>Search Result(s):</h2>
                  <ul></ul>
              </div>
            </div>
        );
    }
}

export default Search;
