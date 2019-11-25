import React from 'react';
import axios from 'axios';
class Search extends React.Component{
  constructor(){
    super()
    this.state = {
    products:null
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

       this.setState({ products: data })

     }).catch((error)=>{
       console.log(error);
     })
 }


  onNameChange(event){
          console.log(event.target.value);
          console.log(this.state.products);
        if(event.target.value == this.state.products.name) {
          console.log(this.state.products);
        } else{
          console.log("none");
        }
      }

    render(){

      return(

        <div>
          <input placeholder="search" onChange={()=>{this.onNameChange(event)}}/>
          <br/>
          <h1>huehue</h1>
          <input onChange={this.checkInput} />
        </div>
      )
    }
  }

export default Search
