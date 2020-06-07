import React from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';


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

  clickHandler(event) {
    console.log(event.currentTarget.getAttribute('value'))
    this.props.liftClickResult(event.currentTarget.getAttribute('value'))
  }

  putInputValue(v) {
    let matchtf = [];

    //loop to check matching names with include function
    for(let i=0; i<this.state.data.length; i++) {
      if (v.length > 1) {
        let str = this.state.data[i].name;
        let name = str.toLowerCase();
        var n = name.includes(v.toLowerCase());
        if (n == true) {
          matchtf.push('true')
        } else {
          matchtf.push('false')
        }
      }
    }

    //all match will be true, non match be false
    this.setState ({
        match: matchtf
      })
  }

  render() {

    let display = [];
    let counter = 0;
    let resultsCount = '';

    for(let i=0; i<this.state.match.length; i++) {
      if(this.state.match[i] == 'true') {
        display.push(this.state.data[i])
        counter ++;
      }
    }
    if (counter > 0) {
      resultsCount = counter+' results found.';
    }
    const productdisplay = display.map((product,index) => {
      return(
        <span>
          <ListItem button
              value={product.id}
              onClick={(event)=>{this.clickHandler(event)}}
            >
              {index+1}. {product.name}
          </ListItem>
          <Divider/>
        </span>
      )
    })
    return (
      <div>
        <h2 className='border-b'style={{textAlign:'center'}}>Search result </h2>
        <div style={{textAlign:'right', fontSize:'10px'}}>{resultsCount}</div>
        <div style={{maxHeight:'420px', overflow:'scroll'}}>{productdisplay}</div>

      </div>
      );
  }
}
export default SearchResult;