import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Form extends React.Component {
  constructor () {
  super ()
    this.state = {
      posts: []
    }
  }
    getPosts(){

      const url = '/products.json';
    
      axios.get(url)
        .then((response) => {
    
          const data = response.data
    
          this.setState({ posts: data })
    
        }).catch((error)=>{
          console.log(error);
        })
    }


    render() {
      // console.log( "rendering", this.state.posts);
      // console log the posts, this should be an array of objects
const posts = this.state.productss.map((product, index)=>{
  return (<div key={index}>
    <p>{product.name}</p>
    <p>{product.description}</p>
  </div>);
});
  
      
      return (
        <div>
         Hello App

        <button onClick={()=>{ this.getPosts() }}>
        Click to See Posts
        </button>
        {posts}
        </div>
      );
    }
  }
  
  export default Form;