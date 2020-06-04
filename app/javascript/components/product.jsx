import React from 'react';
import Image from './product/image';
import Price from './product/price';
import Description from './product/description';
import AddToCartButton from './product/addtocartbutton';

class Product extends React.Component {

  render() {

    return (
      <div>
        <h2> Product</h2>
        <Image/>
        <Description/>
        <Price/>
        <AddToCartButton/>
      </div>
    );
  }
}
export default Product;