import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

class Shipping extends React.Component {
  constructor(){
    super()
    this.state = {
      shipping:'',
    }
  }

  handleChange() {
    if (event.target.value == '0') {
      this.props.liftshipping(event.target.value)
    }
    if (event.target.value == '7') {
      this.props.liftshipping(event.target.value)
    }
    this.setState({
      shipping:event.target.value,
    })
  }

  render() {
    let shipping = (<h2>Shipping</h2>);
    console.log(this.state.shipping)
    if(this.props.totalprice) {
      shipping = (
        <FormControl component="fieldset">
          <h2>Shipping</h2>
          <RadioGroup color="default" value={this.state.shipping} onChange={()=>{this.handleChange()}}>
            <FormControlLabel value="0" control={<Radio />} label="Normal shipping (+0 Sgd)" />
            <FormControlLabel value="7" control={<Radio />} label="Express shipping (+7 Sgd)" />
          </RadioGroup>
        </FormControl>
        )
    }
    return (
      <div>
        {shipping}
      </div>
    );
  }
}
export default Shipping;