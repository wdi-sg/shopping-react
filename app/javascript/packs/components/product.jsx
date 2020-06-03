import React from 'react'
import axios from 'axios';

class Product extends React.Component {

        constructor(){
      super();



      // set the default value
      this.state = {

            products:[],
            clicked: false,
            productSearch:""

      };
    }

        changeHandler = event => {
                //console.log(`Target value ${event.target.value}`)
                this.setState({productSearch:event.target.value});

                };

    // our click method

    getSearchPosts()
        {



          const url = '/products.json';
          this.setState({clicked: !this.state.clicked});

            axios.get(url, {params: {foo:"searchName", productName:this.state.productSearch}})
            .then((response) => {
                console.log("something")
              const data = response.data

              this.setState({ products: data })

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

              this.setState({ products: data })

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

          axios.get(url, {params: {foo:"name"}})
            .then((response) => {
                console.log("something")
              const data = response.data

              this.setState({ products: data })

            }).catch((error)=>{
              console.log(error);
            })


        }


  render() {
        // console log the posts, this should be an array of objects

        const products = this.state.products.map((product, index)=>{
          //console.log(product);
          return (
            <React.Fragment key={index}>
            <div className = "col-3">
            <p>{product.id}: {product.name}</p>
            <p>Price: {product.price}</p>
          </div>
          </React.Fragment>
          );
        });
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
        <div className = "row">
            {products}
        </div>

      </div>
    </div>
    );
  }
}

export default Product;