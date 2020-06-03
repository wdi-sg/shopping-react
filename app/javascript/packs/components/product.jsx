import React from 'react'
import axios from 'axios';

class Product extends React.Component {

        constructor(){
      super();



      // set the default value
      this.state = {

            products:[],
            clicked: false
      };
    }

    // our click method
    getPosts(){

          const url = '/products.json';
          this.setState({clicked: !this.state.clicked});
          if(this.state.clicked)
          {
          axios.get(url)
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


  render() {
        // console log the posts, this should be an array of objects
        const products = this.state.products.map((product, index)=>{
          //console.log(product);
          return (
            <React.Fragment key={index}>
            <div>
            <p>{product.id}</p>
            <p>{product.name}</p>
          </div>
          </React.Fragment>
          );
        });
    return (
    <div className = "row">
      <div className = "col-12  border  ">
              <button onClick={()=>{ this.getPosts() }}>
                  Click to See Posts
            </button>
            {products}
        <p>john.map((thingsToDo, index)</p>
            <div>
            <div className = "row mb-3">


            <li>thingsToDo</li>



            </div>
            </div>

            <p>)close bracket</p>



        <p>Welcome. Creating a todo again</p>


      </div>
    </div>
    );
  }
}

export default Product;