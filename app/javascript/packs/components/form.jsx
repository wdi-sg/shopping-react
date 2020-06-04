import React from 'react';
import axios from 'axios';

class Form extends React.Component {

  constructor(){
  
    super();

    this.state = {
      
      products:[],

      clicked: false,

      productSearch:""

    };
  }

   changeHandler(event) {
            
    this.setState({productSearch:event.target.value});
    
    this.props.callBackFromForm(event);

  }

    
  getSearchPosts() {

    const url = '/products.json';
    
    this.setState({clicked: !this.state.clicked});

    axios.get(url, {params: {foo:"searchName", productName:this.state.productSearch}})
    
    .then((response) => {
     
      const data = response.data

      this.setState({ products: data })
               
      this.props.productArray(data)
    
    })
    
    .catch((error) => {
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


  render() {


    return (
    <div class = "row">
      <div class = "col ">

       
        <p>

        <input value={this.state.productSearch} ref="inputBox" onChange={(event)=>{this.changeHandler(event);}}></input>
        </p>
        <p>
            <button class="btn btn-outline-secondary" onClick={()=>{ this.getSearchPosts() }}>
                  Search
            </button>
        </p>
        <p>

            <button class="btn btn-outline-secondary" onClick={()=>{ this.getPosts() }}>
                  All Products
            </button>
        </p>

        <div class = "row">

        </div>

      </div>
    </div>
    );
  }
}

export default Form;