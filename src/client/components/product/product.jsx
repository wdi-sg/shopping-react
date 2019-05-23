import React from 'react';


class Product extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    // setClassName() {
    //     if(this.props.currentProduct.description !== "") {
    //         return "descStyle"
    //     }
    //     return "emptyStyle"
    // }


    render() {
        console.log(this.props.currentProduct)
        return (
            <React.Fragment>
            {this.props.currentProduct.description == undefined ? <React.Fragment></React.Fragment> : <React.Fragment>
            <img style={{"border":"1px solid black"}}
                 src="https://www.precisionnutrition.com/wp-content/uploads/2010/03/pile-of-veggies.jpg" alt="Can't be displayed"
                 height="300"
                 width="300"/>
               <br/>
               <h1>Description</h1>
               <p>{this.props.currentProduct.description}</p>
               <h1>Price</h1>
               <p>{this.props.currentProduct.price}</p><button onClick={()=>this.props.addToCart(this.props.currentProduct)}>Add to cart</button></React.Fragment>
            }
            </React.Fragment>
        );
    }
}

export default Product;

 // <p className={this.setClassName()}>{this.props.currentProduct.description}</p>