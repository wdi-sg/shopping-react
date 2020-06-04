import React,{ Component }  from 'react';
import axios from 'axios';

class SearchInput extends React.Component {

  constructor(){
    super();
    this.state = {
      productlist:[],
      value:'coconut',
      label:'',
      inputvalue:'',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(event.target.value)
    //this.props.searchInput(event.target.value)
  }

  changeHandler(event) {
    console.log("change", event.target.value);
    let currentValue = event.target.value
    this.props.searchInput(currentValue)
    this.setState({
      inputvalue: currentValue,
    })
  }

  componentDidMount(){
    const url = '/products.json';
    axios.get(url).then((response) => {
      const data = response.data
      this.setState({
        productlist: data,
      })
    }).catch((error)=>{
      console.log(error);
    })
  }

  render() {
    console.log('render searchInput')
    const List = this.state.productlist.map((list,index)=> {
      return (
        <option value={list.id}>{list.name}</option>
      )
    });

    return (
      <div>
        <div>

          <input id="inputBtn" value={this.state.temp} onChange={(event)=>{this.changeHandler(event);}}/>
        </div>
          <label>
            Product:
            <select value={this.state.value} onChange={this.handleChange}>
              {List}
            </select>
          </label>
      </div>
      );
  }
}
export default SearchInput;