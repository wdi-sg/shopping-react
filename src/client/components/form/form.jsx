import React from 'react';
import styles from './style.scss';
// import PropTypes from 'prop-types';

class Form extends React.Component {
  constructor() {

    super();
    this.state = {
      product: '',
      data: '',
    };

    this.changeHandler = this.changeHandler.bind( this );

  }

    changeHandler(e){
        console.log(e.target.value);
        this.setState({ product: e.target.value });
        this.props.onChange(this.state.product);
        console.log("sending thisssss" + e.target.value)
    }

  render() {

    return (
      <div>
        <input className={styles.name} onChange={this.changeHandler} />
      </div>
    );
  }
}


export default Form;

// Product.propTypes = {
//   products:   PropTypes.object

// };