import React from 'react';
import axios from 'axios';

class SearchResult extends React.Component {
  constructor() {
    super()
    this.state = {
      id:'',
      data:'',
      product:'',
      match:[],
    }

    const url = '/products.json';
    axios.get(url,
      ).then((response) => {
        const data = response.data
        this.setState({ data: data })
      }).catch((error)=>{
        console.log(error);
      })
  }

  clickHandler() {
    this.props.liftResult(event.target.value)
  }

  putInputValue(v) {
    console.log(this.state.data)
    let matchtf = [];
    if (v.length > 1) {
      for(let i=0; i<this.state.data.length;i++) {
        let str = this.state.data[i].name;
        let name = str.toLowerCase();
        var n = name.includes(v);
        if (n == true) {
          matchtf.push('true')
        } else {
          matchtf.push('false')
        }
      }
      this.setState ({
        match: matchtf
      })
    }
  }

  render() {

    console.log(this.state.match)
    let display = [];

    console.log(this.state.match[0])
    console.log(this.state.match.length)

    for(let i=0; i<this.state.match.length; i++) {
      if(this.state.match[i] == 'true') {
        display.push(this.state.data[i])
      }
    }

    const productdisplay = display.map((product) => {
      return(
        <div>
          <button
            value={product.id}
            onClick={()=>{this.clickHandler()}}
          >
            {product.name}
          </button>
        </div>
      )
    })

    return (
      <div>
       <h2>Search Result</h2>
          {productdisplay}
      </div>
      );
  }
}
export default SearchResult;