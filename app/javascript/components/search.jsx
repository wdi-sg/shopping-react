import React from 'react'
import axios from 'axios';


class Search extends React.Component{
    constructor(){
        super();
        this.state = {
            name:"",
            products: []
        }
    }

    getProducts(){


        const url = '/products.json';

        const whenDone = (response) => {
          const data = response.data
          this.setState({ products: data })
          console.log( "WOW DATA",data );
        }

        const whenError = (error)=>{
          console.log(error);
        };

        axios.get(url)
            .then(whenDone)
            .catch(whenError)
    }

    // sendSomething(){
    //     console.log("hello");

    //     const dataToSend = {
    //         name : this.state.name
    //         // firstName: 'Fred',
    //         // lastName: 'Flintstone'
    //       };

    //     axios.post('/user', dataToSend)
    //       .then(function (response) {
    //         console.log(response);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    // }

    // onNameChange(event){
    //     console.log(event.target.value);
    //     let name = event.target.value;
    //     this.setState({name})
    // }


    render(){
        console.log( "rendering", this.state.name);

        // console log the posts, this should be an array of objects
        const products = this.state.products.map((product, index)=>{
          return (
            <div key={product.id}>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <p>{product.url}</p>
                <p>{product.description}</p>
          </div>
          );
        });

        return(
            <div>
                <button onClick={()=>{ this.getProducts() }}>
                  Click to See Products
                </button>
                {products}
            </div>
        );
    }

}

export default Search;