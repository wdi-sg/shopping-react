import React from 'react';
import axios from 'axios';
import Image from './product/image';
import Price from './product/price';
import Description from './product/description';
import AddToCartButton from './product/addtocartbutton';
import Card from '@material-ui/core/Card'
import Divider from '@material-ui/core/Divider';

class Product extends React.Component {
  constructor() {
    super()
    this.state = {
      productlist:'',
    }
  }
  putClickResult (v) {
    console.log(v)
    const url = '/products/'+v+'.json';
    axios.get(url).then((response) => {
      const data = response.data
      this.setState({
        productlist: data,
      })
    }).catch((error)=>{
      console.log(error);
    })
  }

  liftClickId (v) {
    this.props.liftClickId(v)
  }

  render() {
    console.log(this.state.productlist)
    return (
      <div>
        <Card elevation={0}>
          <h2 className='border-b' style={{textAlign:'center'}}> Product</h2>

          <Image imgurl={this.state.productlist.imgurl}/>
          <Divider/>
          <Description description={this.state.productlist.description}/>
          <Divider/>
          <Price price={this.state.productlist.price}/>
          <Divider/>
          <AddToCartButton
            id={this.state.productlist.id}
            liftclickid={(v) => {this.liftClickId(v)}}
          />
        </Card>
      </div>
    );
  }
}
export default Product;