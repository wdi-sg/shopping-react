import React from 'react'
import axios from 'axios';
import classnames from 'classnames';

class Product extends React.Component {

  constructor(){
    super();

    this.state = {
      products: []
    };
  }

    getProducts(){

      const url = '/products.json';

      axios.get(url)
        .then((response) => {

          const data = response.data
          let show = []
          for (let i=0; i < data.length; i++){
            if (data[i].id === this.props.seeProduct[0]){
                show.push(data[i]);
            }
          }


          this.setState({ products: show })

        }).catch((error)=>{
          console.log(error);
        })
    }



  render() {

        if(this.props.seeProduct.length > 0){
            if(this.state.products.length < 1){
                this.getProducts();
            } else {
                if (this.state.products[0].id !== this.props.seeProduct[0]){
                    this.getProducts();
                };
            };

        };

        const products = this.state.products.map((x, index)=>{
          return (  <div className="card mb-3">
                      <img src={x.image_url} className="card-img-top" alt="Product Image" />
                      <div className="card-body">
                        <h5 className="card-title">{x.name}</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Price: ${x.price}</li>
                        </ul>
                        <p className="card-text mt-4 mb-5">{x.description}</p>
                        <div className="text-center">
                            <button className="btn btn-primary" value={this.props.seeProduct} onClick={this.props.setCartProduct} >Add to cart</button>
                        </div>
                      </div>
                    </div>);
        });


    return (
      <div>
            <h2 className="text-center">Product</h2>
            {products}
      </div>
    );
  }
}

export default Product;