import React from 'react'
import axios from 'axios';
import classnames from 'classnames';

class Product extends React.Component {

  constructor(){
    super();

    this.state = {
      total: 0,
      products: []
    };
  }

    getProducts(){

      const url = '/products.json';

      axios.get(url)
        .then((response) => {

          const data = response.data
          let show = []
          let price = []
          for (let i=0; i < data.length; i++){
            for(let j=0; j < this.props.cart.length; j++){
                if (data[i].id === this.props.cart[j]){
                    show.push(data[i]);
                    price.push(data[i].price)
                };
            };
          };

          let total = price.reduce((a,b) => a + b, 0)
          this.setState({ total: total })
          this.setState({ products: show })

        }).catch((error)=>{
          console.log(error);
        })
    }



  render() {

        if(this.props.cart.length > this.state.products.length){
            this.getProducts();
        }

        const products = this.state.products.map((x, index)=>{
          return (  <li className="list-group-item">
                        <p><b>Name: </b>{x.name}</p>
                        <p><b>Price: </b>${x.price}</p>
                    </li>);
                });

        let shipping = this.state.products.length * 0.5;
        let gst = parseInt(this.state.total * 0.07);
        let gTotal = this.state.total + shipping + gst;

    return (
      <div>
            <h2 className="text-center">Cart</h2>
            <ul className="list-group">
                {products}
            </ul>
            <div className="mt-5">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon1">Sub Total</button>
                  </div>
                  <input type="text" className="form-control" readOnly={true} placeholder={"$"+ this.state.total} aria-label="Example text with button addon" aria-describedby="button-addon1" />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon1">Shipping</button>
                  </div>
                  <input type="text" className="form-control" readOnly={true} placeholder={"$"+ shipping} aria-label="Example text with button addon" aria-describedby="button-addon1" />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon1">GST</button>
                  </div>
                  <input type="text" className="form-control" readOnly={true} placeholder={"$"+ gst} aria-label="Example text with button addon" aria-describedby="button-addon1" />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon1">Total</button>
                  </div>
                  <input type="text" className="form-control" readOnly={true} placeholder={"$"+ gTotal} aria-label="Example text with button addon" aria-describedby="button-addon1" />
                </div>
            </div>
      </div>
    );
  }
}

export default Product;