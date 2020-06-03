

import React from 'react';
import axios from 'axios';

class Form extends React.Component {
        constructor(){
      super();



      // set the default value
      this.state = {
             products:[],
            clicked: false,
            productSearch:""
      };
    }

    // our click method
    changeHandler(event)
        {
            this.setState({productSearch:event.target.value});
            //console.log(this.props)

            this.props.callBackFromForm(event);

            //console.log("change", event.target.value);
        }
    getSearchPosts()
        {



          const url = '/products.json';
          this.setState({clicked: !this.state.clicked});

            axios.get(url, {params: {foo:"searchName", productName:this.state.productSearch}})
            .then((response) => {
                console.log("something")
              const data = response.data

              this.setState({ products: data })
               this.props.productArray(data)
            }).catch((error)=>{
              console.log(error);
            })
        }

    getPosts()
        {

          const url = '/products.json';
          this.setState({clicked: !this.state.clicked});
          if(this.state.clicked)
          {
          axios.get(url, {params: {foo:"all"}})
            .then((response) => {
                console.log("something")
              const data = response.data
              //console.log(typeof data)
              this.setState({ products: data })
              this.props.productArray(data)
            }).catch((error)=>{
              console.log(error);
            })

            console.log(this.state.clicked)
            }
            else
            {
                console.log("Entry")
                this.setState({ products: [] })
            }
        }

    getOrderedByNamePosts()
        {

          const url = '/products.json';
          this.setState({clicked: !this.state.clicked});

          axios.get(url, {params: {foo:"name", productName:this.state.productSearch}})
            .then((response) => {
                //console.log("something")
              const data = response.data

              this.setState({ products: data })
              //console.log(data)
              this.props.productArray(data)

            }).catch((error)=>{
              console.log(error);
            })


        }

    getOrderedByPricePosts()
        {

          const url = '/products.json';
          this.setState({clicked: !this.state.clicked});

          axios.get(url, {params: {foo:"price", productName:this.state.productSearch}})
            .then((response) => {
                console.log("something")
              const data = response.data

              this.setState({ products: data })
              this.props.productArray(data)

            }).catch((error)=>{
              console.log(error);
            })


        }

  render() {


    return (
    <div className = "row">
      <div className = "col-12  border  ">
        <p>

        <input value={this.state.productSearch} ref="inputBox" onChange={(event)=>{this.changeHandler(event);}}></input>
        </p>
        <p>
            <button onClick={()=>{ this.getSearchPosts() }}>
                  Search Product Name
            </button>
        </p>
        <p>

            <button onClick={()=>{ this.getPosts() }}>
                  Click to See All Products
            </button>
        </p>
        <p>
            <button onClick={()=>{ this.getOrderedByNamePosts() }}>
                  Arrange Products by Name
            </button>
        </p>

        <p>
            <button onClick={()=>{ this.getOrderedByPricePosts() }}>
                  Arrange Products by Price
            </button>
        </p>
        <div className = "row">

        </div>

      </div>
    </div>
    );
  }
}

export default Form;