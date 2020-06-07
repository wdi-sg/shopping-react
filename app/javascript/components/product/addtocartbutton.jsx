import React from 'react';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Grid from '@material-ui/core/Grid';


class AddToCartButton extends React.Component {

  constructor(){
    super()
    this.state = {
      qty:1,
    }
    this.handleChange = this.handleChange.bind(this);
  }
  clickHandler(){
    let value = {
      id: this.props.id,
      qty: this.state.qty,
    }
    //this.props.liftclickid(this.props.id)
    this.props.liftclickid(value)
  }
  handleChange(){
    this.setState({qty:event.target.value})
  }
  render() {
    //onced product is clicked, button will appear
    let button = '';
    let qty = '';
    let selector = '';
    let text='';


    if(this.props.id) {
      button = (<Button variant="outlined" onClick={()=>{this.clickHandler()}}>Add to cart</Button>)
      qty = Array.apply(null, { length: 10 }).map((e, i) => (
              <option value={i+1}>
                {i+1}
              </option>
            ));
      selector = (
        <FormControl>
            <NativeSelect
              value={this.state.value}
              onChange={this.handleChange}
            >
              {qty}
            </NativeSelect>
            </FormControl>
      )
      text = (<span>Qty:</span>)
    }

    return (
      <div>
        <Grid container>
          <Grid item xs={6}>
            {button}
          </Grid>
          <Grid container item xs={6} alignItems='center'>
            {text}&nbsp; {selector}
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default AddToCartButton;