import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class ProductShow extends React.Component {

additem(key){
  const url = '/products/' + key + '.json';
  console.log(url)
    axios.get(url)
      .then((response) => {
        
        const data = response.data
        console.log(data)
        this.props.addCart(data)
  
      }).catch((error)=>{
        console.log(error);
      })

}

    render(){
        const{ id, name, price , url, description } = this.props.productid;
        return(
        <div class="card" style={{width: "18rem"}}>
          <img class="card-img-top" src = {url} alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{description}</p>
            <p class="card-text">{price}</p>
            <button key={id} onClick ={()=>{this.additem(id)}}>Add to Cart</button>
          </div>
        </div>
        )
    }
}
export default ProductShow
