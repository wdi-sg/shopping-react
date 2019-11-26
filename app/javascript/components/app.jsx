import React from 'react'
import axios from 'axios'

class App extends React.Component {
    constructor(){
        super()
        this.state={
            products: []
        }
    }

    getproducts(){

      const url = '/products.json';
      var eventVal = event.target.value
      console.log(event.target.value)
      axios.get(url)
        .then((response) => {

          const data = response.data
          var array = []
          console.log("Target val: ",eventVal)
          for (var i = 0; i < data.length; i++){
            if(data[i].name.includes(eventVal)){
                // console.log('includes!')
                array = [...array, {...data[i]}]
            }
          }

          this.setState({ products: array })

        }).catch((error)=>{
          console.log(error);
        })
    }

    render(){
        const products = this.state.products.map((product, index)=>{
          return (
          <div className={index}>
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
          );
        });
        return(
            <div>
                <input onChange={()=>{this.getproducts()}}/>
                <button onClick={()=>{ this.getproducts() }}>
                  Click to See All Products
                </button>
                {products}
            </div>
        )
    }
}

export default App;