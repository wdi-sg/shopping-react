import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

let display = [];
let priceTotal = 0;

class CartItem extends React.Component {

  render() {

    let cartlist;
    let text;
    let object = {
      name: this.props.name,
      price: this.props.price,
      qty: parseInt(this.props.qty),
      totalprice: this.props.price * parseInt(this.props.qty),
      imgurl: this.props.imgurl
    }

    if(this.props.name) {
      display.push(object)
      priceTotal = this.props.price * parseInt(this.props.qty) + priceTotal
      text = 'Subtotal: '+priceTotal
    }

    cartlist = display.map((list,index)=> {
        return (
          <span>
            <ListItem button style={{paddingLeft:'0px'}}>
              <Grid container>
                  <Grid item xs={1}>
                    {index+1}.
                  </Grid>
                  <Grid item xs={3}>
                    <img style={{maxWidth:'50px'}}src={list.imgurl}></img>
                  </Grid>
                  <Grid item xs={8}>
                    <Grid item xs={12}>
                      Product: {list.name}
                    </Grid>
                    <Grid item xs={12}>
                      Unit price: {list.price}
                    </Grid>
                    <Grid item xs={12}>
                      Qty: {list.qty}
                    </Grid>
                    <Grid item xs={12}>
                      Order price: {list.totalprice}
                    </Grid>
                  </Grid>
              </Grid>
            </ListItem>
            <Divider/>
          </span>
        )
      });

    return (
      <div style={{overflow:'scroll', maxHeight:'200px'}}>
        <h2>CartItem</h2>
          <div>
            {cartlist}
            {text}
          </div>
      </div>
    );
  }
}
export default CartItem;