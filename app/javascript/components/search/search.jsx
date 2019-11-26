import React from 'react';
import axios from 'axios';
class Search extends React.Component{
  constructor(){
    super()
    this.state = {
      products:null,
      searchTerm:""
    }
  }
  checkInput=(event)=>{
   console.log(event.target.value);
   let input = event.target.value;
   console.log('checkkkkk');
   this.setState({monkey: input});

 }
 componentDidMount=()=>{
   const url = '/products.json';
   axios.get(url)
     .then((response) => {

       const data = response.data

       this.setState({ products: data, display:data })

     }).catch((error)=>{
       console.log(error);
     })
 }


  onNameChange(event){
    console.log(event.target.value)
    this.state.searchTerm = event.target.value;
    this.setState({searchTerm:this.state.searchTerm})
  }

    render(){


      const something = this.state.products ? this.state.products.filter(x=>x.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())).map(x=><p>{x.name}</p>) :"";
      return(

        <div>
          <input placeholder="search" onChange={(e)=>{this.onNameChange(e)}}/>
          <br/>
          <h1>huehue</h1>
        {something}
        </div>
      )
    }
  }

export default Search
