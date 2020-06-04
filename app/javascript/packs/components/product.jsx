import React from 'react'
import axios from 'axios';
import Slider from "react-slick";


import Carousel from 'react-bootstrap/Carousel'
class Product extends React.Component {

        constructor(){
      super();



      // set the default value
      this.state = {

            products:[],
            clicked: false,
            productSearch:"",
            cartPrices:[],
            cartProducts :[],


      };
    }



    // our click method

   addCart(event)
        {
            //this.setState({productSearch:event.target.value});
            //console.log(this.props)
            const url = '/products.json';
          this.setState({clicked: !this.state.clicked});

            axios.get(url, {params: {foo:"id", id:event.target.id}})
            .then((response) => {
                console.log("something")
              const data = response.data
              console.log(data)
              var currentcartProduct = this.state.cartProducts;
                currentcartProduct.push (data[0].name);
                this.setState({cartProducts: currentcartProduct});
              var currentcartPrice = this.state.cartPrices;
                currentcartPrice.push (parseFloat(data[0].price));
                this.setState({cartPrices: currentcartPrice});
                console.log(this.state.cartProducts);
                console.log(this.state.cartPrices);
                this.props.cartProductArray(currentcartProduct);
                this.props.cartPriceArray(currentcartPrice);

              //this.setState({ products: data })
               //this.props.productArray(data)
            }).catch((error)=>{
              console.log(error);
            })


            console.log(event.target.id)
            this.props.clickCartButton(event.target.id);
            //this.props.callBackFromForm(event);

            //console.log("change", event.target.value);
        }

  render() {
        // console log the posts, this should be an array of objects
        //console.log(this.props.productData)
        let john =[];

        if(this.props.productData !== undefined)
        {
            console.log("Entered")
            john = this.props.productData;
        }
        //console.log(john)
        const products = john.map((product, index)=>{
         //console.log(product);
          return (


            <Carousel.Item>
               <img
                className="d-block w-100"
                src="/2.png"
                alt="First slide"
                />
            <p className="test">{product.id} {product.name}</p>
            <p className="test">Price: {product.price}</p>
            <button id={product.id} ref="inputBox" onClick={(event)=>{this.addCart(event)}}>Add</button>

            </Carousel.Item>



          );
        });



    return (
    <div className = "row">
        <div className = "col-12 text-center">
            <Carousel>
                {products}

            </Carousel>
        </div>





    </div>
    );
  }
}

export default Product;